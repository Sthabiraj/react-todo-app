import React from "react";

const InputBox = () => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="bg-darkTheme-veryDarkDesaturatedBlue focus:outline-none font-josefinSans text-base text-darkTheme-lightGrayishBlue placeholder-darkTheme-darkGrayishBlue w-full"
      />
    </div>
  );
};

export default InputBox;
