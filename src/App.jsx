import React from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`flex flex-col items-center h-screen ${
        isDark
          ? "bg-darkTheme-veryDarkBlue bg-darkThemeImage"
          : "bg-lightTheme-veryLightGray bg-lightThemeImage"
      }  bg-no-repeat`}
    >
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <Input isDark={isDark} />
    </div>
  );
};

export default App;
