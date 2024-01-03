import Input from "./components/Input";
import Header from "./components/Header";
import { useState } from "react";
import Todos from "./components/UI/Todos";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [todos, setTodos] = useState([]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const style = `flex flex-col items-center h-screen ${
    isDark
      ? "bg-darkTheme-veryDarkBlue bg-darkThemeImage"
      : "bg-lightTheme-veryLightGrayishBlue bg-lightThemeImage"
  }  bg-no-repeat`;

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
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
  );
};

export default App;
