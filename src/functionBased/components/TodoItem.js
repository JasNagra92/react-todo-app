import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [editable, setEdit] = useState(false);

  useEffect(() => {
    console.log('mounted');
    return () => console.log('unmounting...');
  }, [])

  const handleEdit = () => {
    setEdit(true);
  };
  const handleDone = (e) => {
    if (e.key === "Enter") {
      setEdit(false);
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: "0.4",
    textDecoration: "line-through",
  };
  const { id, title, completed } = props.todo;
  const { handleChangeProps, deleteTodoProps, editTodoProps } = props;

  let viewMode = {};
  let editMode = {};

  if (editable) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={() => handleEdit()} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button onClick={() => deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={(e) => editTodoProps(e.target.value, id)}
        onKeyDown={(e) => handleDone()}
      />
    </li>
  );
};

export default TodoItem;
