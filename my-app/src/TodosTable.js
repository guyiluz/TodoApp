import React from 'react';

const TodosTable = (props) => {
const {todos,handletDelete,handleComplate} = props

let ListTodos=todos.map((todo,index)=>{
if(todo.complited){
    todo.text=<strike>{todo.text}</strike>
}
return <li onClick={handleComplate}  name={index}   key={index}>

{todo.text} {todo.complited} <button name={index} onClick={handletDelete}>Delete</button> </li>

})
    return (
        <div>
          <ul>

             {ListTodos} 
              </ul>  
        </div>
    );
};

export default TodosTable;