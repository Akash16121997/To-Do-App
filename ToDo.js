import React, { useState } from "react";


function ToDo(props) {
  const [inputText, setText] = useState(" ");
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter you text"
        value={inputText}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className="btn-tode"
        onClick={() => {
          props.list(inputText);
          setText("");
        }}
      >
        +
      </button>
      <div>{inputText}</div>
    </div>
  );
}

export default ToDo;
