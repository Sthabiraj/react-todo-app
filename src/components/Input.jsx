import React from "react";
import Box from "./UI/Box";
import Checkbox from "./UI/Checkbox";
import InputBox from "./UI/InputBox";

const Input = ({ isDark }) => {
  return (
    <Box isDark={isDark}>
      <Checkbox />
      <InputBox isDark={isDark} />
    </Box>
  );
};

export default Input;
