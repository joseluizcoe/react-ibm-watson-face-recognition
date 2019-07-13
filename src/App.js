import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import { ContentRouter } from './components/ContentRouter';
import { Header } from './components/Header';
import { Loading } from './components/Loading';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl : '',
      faces: [],
      images: [],
      query: '',
      loading: false,
      activeItem: 'home',
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
        let newState = {
          faces: faces,
          loading: false,
          activeItem: 'faces',
        };
        this.setState(newState);
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      })
  }

  imageSearch = () => {
    const { query } = this.state;
    const { REACT_APP_IMAGE_SEARCH_URL } = process.env;
    const url = `${REACT_APP_IMAGE_SEARCH_URL}?q=${query}`;

    let newState = {
      loading: true,
      images: [],
      activeItem: 'images',
    };
    this.setState(newState);

    axios
      .get(url)
      .then(response => {
        const images = response.data;
        console.log('images', images);
        let newState = {
          images,
          imageUrl : '',
          loading: false,
        };
        this.setState(newState);
      })
      .catch(err => {
        console.log(err);
        let newState = {
          imageUrl : '',
          faces: [],
          images: [],
          loading: false,
        };
        this.setState(newState);
      })
  }

  setStateObject = (object) => {
    object.faces = [];
    this.setState(object);
    setTimeout(this.imageSearch, 300);
  }
  
  handleImageResultClick = (event) => {
//    event.preventDefault();
    let newState = { 
      imageUrl : event.target.src,
      faces: []
    };
    this.setState(newState);
    setTimeout(this.detectFaces, 300);
  }

  render () {
    const { loading } = this.state;
    return (
      <div className="App">
        <Header setStateObject={this.setStateObject} />
        <Loading loading={loading} />
        <ContentRouter
          {...this.state}
          handleImageResultClick={this.handleImageResultClick}
        />
      </div>
    )
  }
}

export default App;
