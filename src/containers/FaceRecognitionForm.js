import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

export class FaceRecognitionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query : '',
    } 
  }

  onChangeInput = (event) => {
    const name = event.target.name;
    console.log(name)
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
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input width="14" fluid placeholder='Busca' name="query" onChange={this.onChangeInput} />
          <Form.Button width="2" content='buscar' />
        </Form.Group>
      </Form>
    )
  }
}

export default FaceRecognitionForm;
