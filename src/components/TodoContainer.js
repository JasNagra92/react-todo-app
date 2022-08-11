import React from "react"; 
import TodosList from "./TodosList"; 
import Header from "./Header";

class TodoContainer extends React.Component{
    state = {
        todos: [
            {
                id:1,
                title: "setup development environment",
                completed: true
            },
            {
                id:2,
                title: "develop website and add content",
                completed: false
            },
            {
                id:3,
                title: "deploy to live server",
                completed: false
            }
        ]
    };
    handleChange = (id) =>{
        this.setState(prevState => ({
            todos: prevState.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } 
                return todo
            }),
        }))
    }
    delTodo = id => {
        console.log('deleted', id)
    }
    render() {
        return(
            <div>
                <Header />
                <TodosList
                 todos = {this.state.todos}
                 handleChangeProps={this.handleChange}
                 delTodo={this.delTodo}
                 />
            </div>
        )
    }
}

export default TodoContainer