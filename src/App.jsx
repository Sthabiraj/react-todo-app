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

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const isAll = JSON.parse(localStorage.getItem("isAll"));
    const isActive = JSON.parse(localStorage.getItem("isActive"));
    const isCompleted = JSON.parse(localStorage.getItem("isCompleted"));
    const isDark = JSON.parse(localStorage.getItem("isDark"));
    setIsDark(isDark);
    if (todos && todos.length > 0) {
      setTodos(todos);
      setCompletedTodos(completedTodos);
      setActiveTodos(activeTodos);
      setIsAll(isAll);
      setIsActive(isActive);
      setIsCompleted(isCompleted);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("isAll", JSON.stringify(isAll));
    localStorage.setItem("isActive", JSON.stringify(isActive));
    localStorage.setItem("isCompleted", JSON.stringify(isCompleted));
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [todos, isAll, isActive, isCompleted, isDark]);

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
