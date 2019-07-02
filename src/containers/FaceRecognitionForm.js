import React, { Component } from 'react';

export class FaceRecognitionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query : '',
    } 
  }

  onChangeInput = (event) => {
    const name = event.target.name;
    this.setState({
      [name] : event.target.value 
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { handleSubmit } = this.props;
    handleSubmit(this.state);
    this.setState({ query : ''});
  }

  render() {
    console.log('Form Render');
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="query" onChange={this.onChangeInput}/>
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default FaceRecognitionForm;
