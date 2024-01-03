import Box from "./Box";
import Todo from "../Todo";
import TodoActions from "../TodoActions";

const Todos = ({ isDark, todos }) => {
  const style = `rounded shadow-2xl ${
    isDark
      ? "bg-darkTheme-veryDarkDesaturatedBlue"
      : "bg-lightTheme-veryLightGray"
  } w-screen max-w-lg`;

  return (
    <Box isDark={isDark} className={style}>
      <div>
        {todos.map((todo, index) => (
          <Todo key={index} isDark={isDark} value={todo} />
        ))}
      </div>
      {todos.length !== 0 && <TodoActions />}
    </Box>
  );
};

export default Todos;
