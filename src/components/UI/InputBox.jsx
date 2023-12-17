import React from "react";

const InputBox = ({ isDark }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Create a new todo..."
        className={`bg-transparent focus:outline-none font-josefinSans text-base ${
          isDark
            ? "text-darkTheme-lightGrayishBlue placeholder-darkTheme-darkGrayishBlue"
            : "text-lightTheme-veryDarkGrayishBlue placeholder-lightTheme-darkGrayishBlue"
        } w-full`}
      />
    </div>
  );
};

export default InputBox;
