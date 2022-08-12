import React, { useState } from "react";

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });
  const { addTodoProps } = props;

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({title: ''});
    } else {
      alert("Please write item");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        onChange={onChange}
        value={inputText.title}
        name="title"
        placeholder="Add Todo..."
        className="input-text"
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};
export default InputTodo;
