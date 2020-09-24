import React, { useState } from "react";
import classnames from "classnames";

export const TodoInput = ({
  todoText,
  placeholder,
  editing,
  newTodo,
  save,
}) => {
  const [text, setText] = useState(todoText || "");
  const handleSubmit = (e) => {
    const inputText = e.target.value.trim();
    if (e.which === 13) {
      save(inputText);
      if (newTodo) {
        setText("");
      }
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = (e) => {
    if (!newTodo) {
      save(e.target.value);
    }
  };

  return (
    <input
      className={classnames({
        edit: editing,
        "new-todo": newTodo,
      })}
      type="text"
      placeholder={placeholder}
      autoFocus
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};
