import { useTodo } from "../contexts";
import Box from "./UI/Box";
import Checkbox from "./UI/Checkbox/Checkbox";
import InputBox from "./UI/InputBox";

const Input = () => {
  const { isDark } = useTodo();
  const style = `rounded ${
    isDark
      ? "bg-darkTheme-veryDarkDesaturatedBlue"
      : "bg-lightTheme-veryLightGray"
  } flex gap-4 px-5 py-4 w-screen max-w-lg mb-5`;

  return (
    <Box className={style}>
      <Checkbox completed={false} />
      <InputBox />
    </Box>
  );
};

export default Input;
