import React from "react";
import { useTodo } from "../context/useTodo";
import classnames from "classnames";

export const Tag = ({ children, filter }) => {
  const [{ visibilityFilter }, dispatch] = useTodo();

  return (
    <a
      href="#"
      type="button"
      className={classnames({ selected: filter === visibilityFilter })}
      style={{ cursor: "pointer" }}
      onClick={() =>
        dispatch({
          type: "SET_VISIBILITY",
          payload: {
            visibilityFilter: filter,
          },
        })
      }
    >
      {children}
    </a>
  );
};
