import { useState } from "react";
import Checkbox from "./UI/Checkbox";
import { useTodo } from "../contexts";

const Todo = ({ isDark, todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMessage, setTodoMessage] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMessage });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div className="flex align-middle gap-5 px-6 py-5 w-screen max-w-lg border-b border-b-darkTheme-veryDarkGrayishBlue-hover">
      <Checkbox />
      <input
        className={`bg-transparent font-josefinSans text-base ${
          isDark
            ? "text-darkTheme-lightGrayishBlue"
            : "text-lightTheme-veryDarkGrayishBlue"
        } w-full pt-1 ${
          false && "line-through text-darkTheme-veryDarkGrayishBlue-default"
        }`}
        value={todoMessage}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMessage(e.target.value)}
      />
      <button className="hover:" onClick={() => deleteTodo(todo.id)}>
        <img src="./src/assets/icons/icon-cross.svg" alt="cross-icon" />
      </button>
    </div>
  );
};

export default Todo;
