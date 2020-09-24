import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { reducer } from "./stores/reducer";
import { TodoProvider } from "./context/TodoProvider";

const initState = {
  todos: [
    {
      text: "React Hooks",
      completed: false,
      id: 0,
    },
    {
      text: "Context",
      completed: true,
      id: 1,
    },
  ],
  visibilityFilter: "All",
};
const App = () => (
  <TodoProvider initState={initState} reducer={reducer}>
    <div>
      <Header />
      <MainSection />
    </div>
  </TodoProvider>
);

export default App;
