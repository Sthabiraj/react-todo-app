import React from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import { useState } from "react";
import Box from "./components/UI/Box";
import Checkbox from "./components/UI/Checkbox";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const style = `flex flex-col items-center h-screen ${
    isDark
      ? "bg-darkTheme-veryDarkBlue bg-darkThemeImage"
      : "bg-lightTheme-veryLightGray bg-lightThemeImage"
  }  bg-no-repeat`;

  return (
    <div className={style}>
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <Input isDark={isDark} />
      <Box isDark={isDark}>
        <div>
          <Checkbox />
        </div>
      </Box>
    </div>
  );
};

export default App;
