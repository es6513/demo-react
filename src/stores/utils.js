export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getFilteredTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case "All":
      return todos;
    case "Completed":
      return todos.filter((t) => t.completed);
    case "Active":
      return todos.filter((t) => !t.completed);
    default:
      throw new Error(`Unknown filter: ${visibilityFilter}`);
  }
};

export const getCompletedCount = (todos) =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);
