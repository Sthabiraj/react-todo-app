import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "Todo 1",
      completed: false,
    },
  ],
  completedTodos: [],
  activeTodos: [],
  showActiveTodos: () => {},
  showCompletedTodos: () => {},
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleCompleted: (id) => {},
  isDark: false,
  setIsAll: () => {},
  setIsActive: () => {},
  setIsCompleted: () => {},
  isAll: true,
  isCompleted: false,
  isActive: false,
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;
