import React from "react";

const Box = ({ children, isDark }) => {
  return (
    <div
      className={`rounded ${
        isDark
          ? "bg-darkTheme-veryDarkDesaturatedBlue"
          : "bg-lightTheme-veryLightGrayishBlue"
      } flex gap-5 px-6 py-4 w-screen max-w-lg mb-5`}
    >
      {children}
    </div>
  );
};

export default Box;
