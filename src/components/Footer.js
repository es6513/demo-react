import React from "react";
import { Tag } from "./Tag";

const FILTER_TITLES = ["All", "Active", "Completed"];

export const Footer = ({ activeCount, completedCount, onClearCompleted }) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{activeCount || "No"}</strong>{" "}
      {activeCount === 1 ? "item" : "items"} left
    </span>
    <ul className="filters">
      {FILTER_TITLES.map((filter) => (
        <li key={filter}>
          <Tag filter={filter}>{filter}</Tag>
        </li>
      ))}
    </ul>
    {!!completedCount && (
      <button
        type="button"
        className="clear-completed"
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    )}
  </footer>
);
