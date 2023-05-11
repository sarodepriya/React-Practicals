import React, { Component } from 'react';
import Form from './Form';

class Add extends Component {
  render() {
    return (
      <div>
          <h1>Addition</h1>
          <Form operator='+' />
          <h1>Subtraction</h1>
          <Form operator='-' />
      </div>
    );
  }
}

export default Add;