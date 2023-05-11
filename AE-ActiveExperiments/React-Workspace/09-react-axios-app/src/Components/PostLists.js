import React, { Component } from 'react'
import axios from "axios"

export class PostLists extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         errorMsg : ''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(result => {
            console.log(result); 
            this.setState({posts:result.data})          
        }).catch(error => {
            console.log(error);
            this.setState({errorMsg : 'Error while retriving data'})
        });
    }
  render() {
    const {posts,errorMsg} = this.state
    return (
      <div>
        List of Posts
        {
            posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null
        }
        {
            errorMsg ? <div>{errorMsg}</div> : null
        }
      </div>
    )
  }
}

export default PostLists