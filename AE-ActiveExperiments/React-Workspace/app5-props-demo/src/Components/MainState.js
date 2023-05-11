import React, { Component } from 'react'

export default class MainState extends Component {

    constructor(){
        super();
        this.state = {
            username : 'Welcome Rahul'
        }
    }
    displayId(){
        this.setState({username:'Your ID is 1002'})
    }
  render() {
    const{data}=this.props
    return (
      <div>
        <h3>{data}</h3>
        <h3>{this.state.username}</h3>
        <button onClick={() => this.displayId()}>Display ID</button>
      </div>
    )
  }
}
