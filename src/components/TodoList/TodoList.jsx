import React, { useEffect } from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.scss";

export const TodoList = ({ removeToDo, todos, editTodo, handleCheck }) => {
  return (
    <div className="TodoList">
      <h2 className="TodoList__header">What do I need to do:</h2>

      <div className="TodoList__list-container">
        <ul className="TodoList__list">
          {todos?.map((item, index) => (
            <TodoItem
              key={index}
              index={index}
              item={item}
              removeToDo={removeToDo}
              editTodo={editTodo}
              handleCheck={handleCheck}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
