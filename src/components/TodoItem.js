import React from "react";

class TodoItem extends React.Component{

    render(){
        const {todo, handleChangeProps, delTodos} = this.props
        return(
            <li>
            <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={() => handleChangeProps(todo.id)}
             />
            <button
            onClick={() => delTodos()}
            >
            Delete
            </button>
             {todo.title}
            </li>
        )
    }
}

export default TodoItem