import { useState } from "react";
import { useTodo } from "../contexts";

const TodoActions = () => {
  const { todos, deleteTodo } = useTodo();

  const [completedTodos, setCompletedTodos] = useState(todos);
  const [activeTodos, setActiveTodos] = useState(todos);

  const clearCompleted = () => {
    todos.map((todo) => {
      if (todo.completed) {
        deleteTodo(todo.id);
      }
    });
  };

  const showActiveTodos = () => {};

  const showCompletedTodos = () => {};

  return (
    <div className="flex px-6 py-4 justify-between text-sm font-josefinSans font-semibold text-darkTheme-veryDarkGrayishBlue-default">
      <div className="font-normal">{`${todos.length} items left`}</div>
      <div className="flex gap-4">
        <button className="text-primary hover:text-darkTheme-lightGrayishBlueHover">
          All
        </button>
        <button
          className="hover:text-darkTheme-lightGrayishBlueHover"
          onClick={showActiveTodos}
        >
          Active
        </button>
        <button
          className="hover:text-darkTheme-lightGrayishBlueHover"
          onClick={showCompletedTodos}
        >
          Completed
        </button>
      </div>
      <button
        className="hover:text-darkTheme-lightGrayishBlue font-normal"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoActions;
