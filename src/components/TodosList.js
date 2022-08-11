import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component{

    
    render(){
        const {todos, handleChangeProps, delTodo} = this.props

        return (
            <ul>
                {todos.map(todo => {
                    return <TodoItem
                             todo={todo}
                             key={todo.id}
                             handleChangeProps={handleChangeProps}
                             delTodo={delTodo}                           
                            />
                })}
            </ul>
        )
    }
}

export default TodosList