import { useState } from "react";
import { useTodo } from "../../contexts/index";

const InputBox = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    if (e.key === "Enter") {
      if (!todo) return;
      addTodo({ todo, completed: false });
      setTodo("");
    }
  };

  const { isDark } = useTodo();

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Create a new todo..."
        className={`bg-transparent focus:outline-none font-josefinSans text-base ${
          isDark
            ? "text-darkTheme-lightGrayishBlue placeholder-darkTheme-darkGrayishBlue"
            : "text-lightTheme-veryDarkGrayishBlue placeholder-lightTheme-darkGrayishBlue"
        } w-full`}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyUp={add}
      />
    </div>
  );
};

export default InputBox;
