import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topics:'React'
      }
    }
    changeUsername = event => {
        this.setState({username:event.target.value})

    }
    changeComments = event => {
      this.setState({comments:event.target.value})
    }

    changeTopics = event => {
      this.setState({topics:event.target.value})
    }

    formSubmit = event => {
      alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)
      event.preventDefault();
    }

  render() {
    return (
        <form onSubmit={this.formSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.changeUsername}></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea value = {this.state.comments} onChange={this.changeComments}/>
        </div>
        <div>
          <label>Topics</label>
          <select value={this.state.topics} onChange={this.changeTopics}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
  
