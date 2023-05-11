import React from "react";

class Main2 extends React.Component{
    constructor(){
        super();
        this.state={ count : 0, no:1 } //count is a property define with state
    }
    render(){
        return(
            <div className="alert alert-danger">
            <button className="btn btn-primary mr-2" onClick={()=> this.setState({count : this.state.count + 1})}>+</button>
            <button className="btn btn-primary mr-2">{this.state.count}</button>
            <button className="btn btn-primary mr-2" onClick={() => this.setState({count : this.state.count - 1})}>-</button>
            <br/>
            <span className="badge badge-dak my-3">{this.state.no}</span>
            <button className="btn btn-primary" onClick={() => this.setState({no : this.state.no + 1})}>+</button>
        </div>
        )
    }
}

export default Main2;