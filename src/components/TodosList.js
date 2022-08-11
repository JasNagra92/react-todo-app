import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component{

    
    render(){
        const {todos, handleChangeProps, deleteTodoProps, updateTodoProps} = this.props

        return (
            <ul>
                {todos.map(todo => {
                    return <TodoItem
                             todo={todo}
                             key={todo.id}
                             handleChangeProps={handleChangeProps}
                             deleteTodoProps={deleteTodoProps}
                             updateTodoProps={updateTodoProps}                           
                            />
                })}
            </ul>
        )
    }
}

export default TodosList