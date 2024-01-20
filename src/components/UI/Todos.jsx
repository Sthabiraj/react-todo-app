import Box from "./Box";
import Todo from "../Todo";
import TodoActions from "../TodoActions";
import { useTodo } from "../../contexts";

const Todos = () => {
  const { isDark, todos } = useTodo();

  const style = `rounded shadow-2xl ${
    isDark
      ? "bg-darkTheme-veryDarkDesaturatedBlue"
      : "bg-lightTheme-veryLightGray"
  } w-screen max-w-lg`;

  return (
    <Box isDark={isDark} className={style}>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      {todos.length !== 0 && <TodoActions />}
    </Box>
  );
};

export default Todos;
