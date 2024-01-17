import { useState } from "react";
import Checkbox from "./UI/Checkbox";
import { useTodo } from "../contexts";

const Todo = ({ isDark, todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMessage, setTodoMessage] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMessage });
    setIsTodoEditable(false);
  };

  const toggleComplete = () => {
    toggleCompleted(todo.id);
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex cursor-pointer align-middle gap-5 px-6 py-5 w-screen max-w-lg border-b border-b-darkTheme-veryDarkGrayishBlue-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Checkbox toggleComplete={toggleComplete} completed={todo.completed} />
      <input
        className={`bg-transparent font-josefinSans text-base ${
          isDark
            ? "text-darkTheme-lightGrayishBlue"
            : "text-lightTheme-veryDarkGrayishBlue"
        } w-full pt-1 ${
          todo.completed &&
          "line-through text-darkTheme-veryDarkGrayishBlue-default"
        }`}
        value={todoMessage}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMessage(e.target.value)}
      />
      {!todo.completed && (
        <button
          className={`transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else {
              setIsTodoEditable((prev) => !prev);
            }
          }}
          disabled={todo.completed}
        >
          <img
            src={`./src/assets/icons/icon-${
              isTodoEditable ? "save" : "edit"
            }.svg`}
            alt="edit-icon"
          />
        </button>
      )}
      <button
        className={`transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => deleteTodo(todo.id)}
      >
        <img src="./src/assets/icons/icon-cross.svg" alt="cross-icon" />
      </button>
    </div>
  );
};

export default Todo;
