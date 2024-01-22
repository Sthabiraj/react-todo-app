import Input from "./components/Input";
import Header from "./components/Header";
import { useState } from "react";
import Todos from "./components/UI/Todos";
import { TodoContextProvider } from "./contexts/index";
import { useEffect } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [todos, setTodos] = useState([]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // useEffect(() => {
  //   toggleTheme();
  // }, [setIsDark]);

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

  const [completedTodos, setCompletedTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);

  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => todo.completed === true));
    setActiveTodos(todos.filter((todo) => todo.completed === false));
  }, [todos]);

  const [isAll, setIsAll] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <TodoContextProvider
      value={{
        todos,
        completedTodos,
        activeTodos,
        addTodo,
        deleteTodo,
        updateTodo,
        toggleCompleted,
        isDark,
        setIsAll,
        setIsActive,
        setIsCompleted,
        isAll,
        isActive,
        isCompleted,
      }}
    >
      <div
        className={`flex flex-col items-center h-screen ${
          isDark
            ? "bg-darkTheme-veryDarkBlue bg-darkThemeImage"
            : "bg-lightTheme-veryLightGray bg-lightThemeImage"
        }  bg-no-repeat`}
      >
        <Header toggleTheme={toggleTheme} />
        <Input />
        <Todos />
      </div>
    </TodoContextProvider>
  );
};

export default App;
