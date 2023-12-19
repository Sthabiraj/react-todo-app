import React from "react";
import Box from "./Box";
import Todo from "../Todo";

const Todos = ({ isDark }) => {
  const style = `rounded ${
    isDark
      ? "bg-darkTheme-veryDarkDesaturatedBlue"
      : "bg-lightTheme-veryLightGrayishBlue"
  }`;

  return (
    <Box isDark={isDark} className={style}>
      <div>
        <Todo isDark={isDark} />
        <Todo isDark={isDark} />
      </div>
      <div className="flex px-6 py-3 justify-between text-sm font-josefinSans font-semibold text-darkTheme-veryDarkGrayishBlue-default">
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
        <button className="text-darkTheme-lightGrayishBlue font-normal">
          Clear Completed
        </button>
      </div>
    </Box>
  );
};

export default Todos;
