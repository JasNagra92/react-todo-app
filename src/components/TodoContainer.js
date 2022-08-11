import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import uniqid from 'uniqid';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uniqid(),
        title: 'setup development environment',
        completed: true,
      },
      {
        id: uniqid(),
        title: 'develop website and add content',
        completed: false,
      },
      {
        id: uniqid(),
        title: 'deploy to live server',
        completed: false,
      },
    ],
  };
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((elem) => elem.id !== id)],
    });
  };
  addTodoItem = (title) => {
    const newTodo = {
      title: title,
      id: uniqid(),
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  setUpdate = (updatedTitle, id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    }));
  };
  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            updateTodoProps={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
