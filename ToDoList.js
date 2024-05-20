import React from "react";

function ToDoList(props) {
  return (
    <li className="list-item">
      {props.item}
      <span>
        <i
          class="fa-solid fa-delete-left "
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        ></i>
      </span>
    </li>
  );
}

export default ToDoList;
