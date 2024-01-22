import { useState } from "react";
import Checkbox from "./UI/Checkbox";
import { useTodo } from "../contexts";
import { useRef } from "react";

const Todo = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMessage, setTodoMessage] = useState(todo.todo);

  const inputRef = useRef(null);

  const { updateTodo, deleteTodo, toggleCompleted, isDark } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMessage });
    setIsTodoEditable(false);
  };

  const toggleComplete = () => {
    toggleCompleted(todo.id);
  };

  const [isHovered, setIsHovered] = useState(false);

  const update = (e) => {
    if (e.key === "Enter") {
      if (!todo) return;
      if (todo.completed) return;
      if (isTodoEditable) {
        editTodo();
      } else {
        setIsTodoEditable((prev) => !prev);
      }
    }
  };

  return (
    <div
      className={`flex cursor-pointer align-middle gap-5 px-6 py-5 w-screen max-w-lg border-b ${
        isDark
          ? "border-b-darkTheme-veryDarkGrayishBlue-hover"
          : "border-b-darkTheme-lightGrayishBlue"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Checkbox toggleComplete={toggleComplete} completed={todo.completed} />
      <input
        className={`bg-transparent focus:outline-none font-josefinSans text-base ${
          isDark
            ? "text-darkTheme-lightGrayishBlue"
            : "text-lightTheme-veryDarkGrayishBlue"
        } w-full pt-1 ${
          todo.completed &&
          `line-through ${
            isDark
              ? "text-darkTheme-veryDarkGrayishBlue-default"
              : "text-lightTheme-lightGrayishBlue"
          }`
        } ${!isTodoEditable && "cursor-pointer"}`}
        value={todoMessage}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMessage(e.target.value)}
        onKeyUp={update}
        ref={inputRef}
      />
      {!todo.completed && !isTodoEditable && (
        <button
          className={`transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            if (!isTodoEditable) {
              setIsTodoEditable((prev) => !prev);
              inputRef.current.focus();
            }
          }}
        >
          <img src="./src/assets/icons/icon-edit.svg" alt="edit-icon" />
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
