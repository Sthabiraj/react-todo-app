import React from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import { useState } from "react";
import Todos from "./components/UI/Todos";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const style = `flex flex-col items-center h-screen ${
    isDark
      ? "bg-darkTheme-veryDarkBlue bg-darkThemeImage"
      : "bg-lightTheme-veryLightGrayishBlue bg-lightThemeImage"
  }  bg-no-repeat`;

  return (
    <div className={style}>
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <Input isDark={isDark} isReadonly={false} />
      <Todos isDark={isDark} />
    </div>
  );
};

export default App;
