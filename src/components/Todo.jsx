import React, { useState } from "react";
import "../style.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };
  const handleDelete = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };
  return (
    <div className="container">
      <div className="inputBx">
        <input
          type="text"
          value={inputValue}
          placeholder="New todo..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {todos.map((todo, index) => (
        <ul key={index}>
          <span className="listWrapper">
            <li>{todo}</li>{" "}
            <span className="deleteBtn" onClick={() => handleDelete(todo)}>
              x
            </span>
          </span>
        </ul>
      ))}
    </div>
  );
};

export default Todo;
