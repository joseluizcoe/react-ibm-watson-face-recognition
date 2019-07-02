import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
// components
import {FaceRecognitionResult} from './containers/FaceRecognitionResult';
import {FaceRecognitionForm} from './containers/FaceRecognitionForm';
import Image from './components/Image';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl : '',
      type: '',
      faces: [],
      images: [],
      query: '',
      loading: false,
    }
  }

  detectFaces = () => {
    const { imageUrl } = this.state;
    if (!imageUrl) { return };
    const { REACT_APP_API_FACE_RECOGNITION } = process.env;
    const apiUrl = `${REACT_APP_API_FACE_RECOGNITION}?url=${imageUrl}`;

    this.setState( { loading: true })
    axios.get(apiUrl)
      .then(response => {
        const { faces } = response.data.images[0];
        return this.setState({faces: faces});
      })
      .catch(err => {
        console.log(err)
        this.setState( { loading: false })
      })
      .finally( () => this.setState( { loading: false }));
  }

  imageSearch = () => {
    const query = this.state.query;
    const { REACT_APP_GOOGLE_SEARCH_URL,
      REACT_APP_GOOGLE_SEARCH_ID,
      REACT_APP_GOOGLE_SEARCH_KEY
    } = process.env;
    const url = `${REACT_APP_GOOGLE_SEARCH_URL}?q=${query}&cx=${REACT_APP_GOOGLE_SEARCH_ID}&searchType=image&key=${REACT_APP_GOOGLE_SEARCH_KEY}`;

    this.setState( { loading: true })

    axios.get(url)
      .then(
        result => result.data.items.map(
          item => ( 
            { thumbnail : item.link }
          )
        )
      )
      .then(images => {
        this.setState(
          { images,
            imageUrl : '',
          }
        )
      })
      .catch(err => {
        console.log(err);
        let state = {
          imageUrl : '',
          faces: [],
          images: [],
          loading: false,
        };
        this.setState( state );
      })
    }

  setStateObject = (object) => {
    object.faces = [];
    this.setState(object);
    setTimeout(this.imageSearch, 300);
  }
  
  handleImageResultClick = (event) => {
    event.preventDefault();
    this.setState({ imageUrl : event.target.src, faces: [] });
    setTimeout(this.detectFaces, 300);
  }

  render () {
    const {imageUrl, faces, loading} = this.state;
    return (
      <div className="App">
        <h1>Detecting faces</h1>
        <FaceRecognitionForm handleSubmit={this.setStateObject} />
        { loading
          && <>
              <span className="loading">Carregando resultado..</span>
            </>
        }
        <FaceRecognitionResult imageUrl={imageUrl} faces={faces} />
        <div className="imageSearch">
          {
            this.state.images.map(
              item => (
                <button
                  onClick={this.handleImageResultClick}
                >
                  <Image src={item.thumbnail} />
                </button>
              )
            )
          }

        </div>

      </div>
    )
  }
}

export default App;
