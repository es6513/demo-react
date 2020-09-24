import React, { useReducer } from "react";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ reducer, initState, children }) => {
  return (
    <TodoContext.Provider value={useReducer(reducer, initState)}>
      {children}
    </TodoContext.Provider>
  );
};
