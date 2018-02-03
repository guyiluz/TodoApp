import React, { Component } from 'react';
import logo from './logo.svg';
import TodosTable from "./TodosTable"
import './App.css';
import AddTodo from "./AddTodo"

class App extends Component {
  constructor(props){
super(props)
this.state={
todos:[],


}

  }

componentDidMount(){
  fetch("http://localhost:8000/")
  .then((resp) => resp.json()) 
  .then((todos)=> {

    this.setState({
      todos:todos

    })
   console.log(this.state)

    })
  }


  saveTodo=(todo)=>{
console.log(todo)
fetch("http://localhost:8000/",{
  method:"POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({text:todo,complited:false})    
})
.then(function(res){ return res.json()})
.then((data)=>{
  this.setState({
    todos:data
  })})}




  handletDelete=(e)=>{
   const delTodo= e.currentTarget.name
console.log('delTodo:',delTodo);

fetch("http://localhost:8000/",{
  method:"DELETE",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({delTodo})
})
.then(function(res){ return res.json()})
.then((data)=>{
  this.setState({
    todos:data
  })})}



  handleComplate=(e)=>{

    const complateTodo= e.target.value
    if(complateTodo==undefined){
      return false
    }
 console.log('delTodo:',complateTodo);
 
 fetch("http://localhost:8000/",{
   method:"PUT",
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({complateTodo})
 })
 .then(function(res){ return res.json()})
 .then((data)=>{
   this.setState({
     todos:data
   })})}
 




  

  


  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get startedit <code>src/App.js</code> and save to reload.
        </p>
        <AddTodo saveTodo={this.saveTodo} />
        <TodosTable todos={this.state.todos} handletDelete={this.handletDelete} handleComplate={this.handleComplate}/> 
      </div>
    );
  }
}

export default App;
