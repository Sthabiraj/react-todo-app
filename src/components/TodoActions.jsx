import { useTodo } from "../contexts";

const TodoActions = () => {
  const { todos, deleteTodo, setIsAll, setIsActive, setIsCompleted } =
    useTodo();

  const showAllTodos = () => {
    setIsAll(true);
    setIsActive(false);
    setIsCompleted(false);
  };

  const showActiveTodos = () => {
    setIsAll(false);
    setIsActive(true);
    setIsCompleted(false);
  };

  const showCompletedTodos = () => {
    setIsAll(false);
    setIsActive(false);
    setIsCompleted(true);
  };

  const clearCompleted = () => {
    todos.map((todo) => {
      if (todo.completed) {
        deleteTodo(todo.id);
      }
    });
  };

  return (
    <div className="flex px-6 py-4 justify-between text-sm font-josefinSans font-semibold text-darkTheme-veryDarkGrayishBlue-default">
      <div className="font-normal">{`2 items left`}</div>
      <div className="flex gap-4">
        <button
          className="text-primary hover:text-darkTheme-lightGrayishBlueHover"
          onClick={showAllTodos}
        >
          All
        </button>
        <button
          className="hover:text-darkTheme-lightGrayishBlueHover"
          onClick={showActiveTodos}
        >
          Active
        </button>
        <button
          className="hover:text-darkTheme-lightGrayishBlueHover"
          onClick={showCompletedTodos}
        >
          Completed
        </button>
      </div>
      <button
        className="hover:text-darkTheme-lightGrayishBlue font-normal"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoActions;
