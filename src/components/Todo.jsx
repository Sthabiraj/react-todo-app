import React from "react";
import Checkbox from "./UI/Checkbox";
import InputBox from "./UI/InputBox";

const Todo = ({ isDark, value }) => {
  return (
    <div className="flex gap-5 px-6 py-5 w-screen max-w-lg border-b border-b-darkTheme-veryDarkGrayishBlue-hover">
      <Checkbox />
      <InputBox isDark={isDark} isReadonly={true} value={value} />
    </div>
  );
};

export default Todo;
