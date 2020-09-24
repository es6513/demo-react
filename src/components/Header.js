import React from "react";
import { TodoInput } from "./TodoInput";
import { useTodo } from "../context/useTodo";

const Header = () => {
  const dispatch = useTodo()[1];

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoInput
        newTodo
        save={(text) => {
          if (text.length !== 0) {
            dispatch({
              type: "ADD",
              payload: { text },
            });
          }
        }}
        placeholder="What needs to be done?"
      />
    </header>
  );
};

export default Header;
