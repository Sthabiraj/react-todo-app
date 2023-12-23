import Box from "./Box";
import Todo from "../Todo";
import TodoActions from "../TodoActions";

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
      <TodoActions />
    </Box>
  );
};

export default Todos;
