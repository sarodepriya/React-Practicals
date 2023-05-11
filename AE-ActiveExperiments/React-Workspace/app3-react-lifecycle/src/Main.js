import React, { Component } from 'react'

export default class Main extends Component {

    constructor(){
        super();
        this.state={count : 0}
        console.log('constructor is called.');
    }
    componentDidMount(){
         console.log("componentDidMount called.")
    }
  render() {
    console.log('render method called');
    return (
     
        <div className="alert alert-success">
            <button className="btn btn-primary mr-2" onClick={() => this.setState({count : this.state.count + 1})}>+</button>
            <button className="btn btn-primary mr-2">{this.state.count}</button>
            <button className="btn btn-primary mr-2" onClick={() => this.setState({count : this.state.count - 1})}>-</button>
            
        </div>
      
    )
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate called.');
        return true;
    }
  componentDidUpdate(){
    console.log('comonentDidUpdate called.')
  }    
  componentWillUnmount(){
    console.log('componentWillUnmount called.')
  }
  }
