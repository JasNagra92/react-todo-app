import React, { useState, useEffect } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import uniqid from "uniqid";

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || []
  }

  useEffect(() => {
    const newTodos = JSON.stringify(todos)
    localStorage.setItem('todos', newTodos)
  }, [todos])

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((elem) => elem.id !== id)]);
  };
  const addTodoItem = (title) => {
    const newTodo = {
      title: title,
      id: uniqid(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const editTodo = (title, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          editTodoProps={editTodo}
        />
      </div>
    </div>
  );
}

export default TodoContainer;
