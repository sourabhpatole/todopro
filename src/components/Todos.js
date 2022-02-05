import React from "react";
import TodoItem from "./TodoItem";
export const Todos = (props) => {
  return (
    <div>
      <h3>Todos List</h3>
      {props.todos.length === 0
        ? "No todo display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
