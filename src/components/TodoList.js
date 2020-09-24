import React from "react";
import { TodoItem } from "./TodoItem";
import { getFilteredTodos } from "../stores/utils";

export const TodoList = ({ todos, visibilityFilter }) => (
  <ul className="todo-list">
    {getFilteredTodos(todos, visibilityFilter).map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);
