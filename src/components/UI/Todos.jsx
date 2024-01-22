import Box from "./Box";
import Todo from "../Todo";
import TodoActions from "../TodoActions";
import { TodoContextProvider, useTodo } from "../../contexts";
import { useState } from "react";

const Todos = () => {
  const {
    isDark,
    todos,
    activeTodos,
    completedTodos,
    isAll,
    isActive,
    isCompleted,
  } = useTodo();

  const style = `rounded shadow-2xl ${
    isDark
      ? "bg-darkTheme-veryDarkDesaturatedBlue"
      : "bg-lightTheme-veryLightGray"
  } w-screen max-w-lg`;

  return (
    <Box isDark={isDark} className={style}>
      <div>
        {isAll && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        {isActive &&
          activeTodos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        {isCompleted &&
          completedTodos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </div>
      {todos.length !== 0 && <TodoActions />}
    </Box>
  );
};

export default Todos;
