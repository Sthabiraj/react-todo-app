import React from "react";
import Box from "./Box";
import Todo from "../Todo";

const Todos = ({ isDark }) => {
  const style = `rounded shadow-2xl ${
    isDark
      ? "bg-darkTheme-veryDarkDesaturatedBlue"
      : "bg-lightTheme-veryLightGray"
  }`;

  return (
    <Box isDark={isDark} className={style}>
      <div>
        <Todo isDark={isDark} value="Hello world" />
        <Todo isDark={isDark} value="I am a react dev" />
      </div>
      <div className="flex px-6 py-4 justify-between text-sm font-josefinSans font-semibold text-darkTheme-veryDarkGrayishBlue-default">
        <div className="font-normal">5 items left</div>
        <div className="flex gap-4">
          <button className="text-primary hover:text-darkTheme-lightGrayishBlueHover">
            All
          </button>
          <button className="hover:text-darkTheme-lightGrayishBlueHover">
            Active
          </button>
          <button className="hover:text-darkTheme-lightGrayishBlueHover">
            Completed
          </button>
        </div>
        <button className="hover:text-darkTheme-lightGrayishBlue font-normal">
          Clear Completed
        </button>
      </div>
    </Box>
  );
};

export default Todos;
