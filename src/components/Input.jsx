import { useTodo } from "../contexts";
import Box from "./UI/Box";
import Checkbox from "./UI/Checkbox";
import InputBox from "./UI/InputBox";

const Input = () => {
  const { isDark } = useTodo();
  const style = `rounded ${
    isDark
      ? "bg-darkTheme-veryDarkDesaturatedBlue"
      : "bg-lightTheme-veryLightGray"
  } flex gap-5 px-6 py-4 w-screen max-w-lg mb-5`;

  return (
    <Box className={style}>
      <Checkbox />
      <InputBox />
    </Box>
  );
};

export default Input;
