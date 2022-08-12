import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    const { todos, handleChangeProps, deleteTodoProps, editTodoProps } = this.props;

    return (
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              handleChangeProps={handleChangeProps}
              deleteTodoProps={deleteTodoProps}
              editTodoProps={editTodoProps}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodosList;
