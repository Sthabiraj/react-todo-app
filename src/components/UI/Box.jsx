import React from "react";

const Box = ({ children, isDark }) => {
  return (
    <div
      className={`rounded ${
        isDark
          ? "bg-darkTheme-veryDarkDesaturatedBlue"
          : "bg-lightTheme-veryLightGrayishBlue"
      } flex gap-5 px-7 py-4 w-screen max-w-lg`}
    >
      {children}
    </div>
  );
};

export default Box;
