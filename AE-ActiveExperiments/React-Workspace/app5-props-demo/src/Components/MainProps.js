import React, { Component } from 'react'

export default class MainProps extends Component {
  render() {
    return (
      <div>From Main class-component : 
        <br/>
        Your User-Id is - {this.props.userid}
        <hr/>
      </div>

    ) 
}
}