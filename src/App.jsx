import Input from "./components/Input";
import Header from "./components/Header";
import { useState } from "react";
import Todos from "./components/UI/Todos";
import { TodoContextProvider } from "./contexts/index";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [todos, setTodos] = useState([]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const style = `flex flex-col items-center h-screen ${
    isDark
      ? "bg-darkTheme-veryDarkBlue bg-darkThemeImage"
      : "bg-lightTheme-veryLightGrayishBlue bg-lightThemeImage"
  }  bg-no-repeat`;

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo))
    );
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <TodoContextProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}
    >
      <div className={style}>
        <Header toggleTheme={toggleTheme} isDark={isDark} />
        <Input
          isDark={isDark}
          value={value}
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
        />
        <Todos isDark={isDark} todos={todos} />
      </div>
    </TodoContextProvider>
  );
};

export default App;
