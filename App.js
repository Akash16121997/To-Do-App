
import "./App.css";
import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";

function App() {
  const [listTodo, setTodo] = useState([]);

  let list = (inputText) => {
    setTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <ToDo list={list} />

        <h1 className="app-heading"> TODO </h1>
        {listTodo.map((listItem, i) => {
          return (
            <ToDoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
