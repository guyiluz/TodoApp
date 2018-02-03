import React, { Component } from 'react';

class AddTodo extends Component {
constructor(props){
super(props)
this.state={
newTodo:""

}

}

handleNewTodo=(e)=>{
const text= e.target.value
this.setState({newTodo:text})

}
saveTodo=()=>{
const toto = this.state.newTodo
this.props.saveTodo(toto)
this.setState({newTodo:""})

}

    render() {
        return (
            <div>
               <input onChange={this.handleNewTodo} value={this.state.newTodo}  type="text"/> 
               <button onClick={this.saveTodo}> Add</button>
            </div>
        );
    }
}

export default AddTodo;