import { useTodo } from "../contexts";

const TodoActions = () => {
  const {
    todos,
    deleteTodo,
    setIsAll,
    setIsActive,
    setIsCompleted,
    activeTodos,
    isAll,
    isActive,
    isCompleted,
    isDark,
  } = useTodo();

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
    <div
      className={`flex px-6 py-4 justify-between text-sm font-josefinSans font-semibold ${
        isDark
          ? "text-darkTheme-veryDarkGrayishBlue-default"
          : "text-lightTheme-darkGrayishBlue"
      }`}
    >
      <div className="font-normal">{`${activeTodos.length} items left`}</div>
      <div className={`flex gap-4 `}>
        <button
          className={`${isAll && "text-primary"} ${
            isDark
              ? "hover:text-darkTheme-lightGrayishBlueHover"
              : "hover:text-lightTheme-veryDarkGrayishBlue"
          } `}
          onClick={showAllTodos}
        >
          All
        </button>
        <button
          className={`${isActive && "text-primary"}  ${
            isDark
              ? "hover:text-darkTheme-lightGrayishBlueHover"
              : "hover:text-lightTheme-veryDarkGrayishBlue"
          } `}
          onClick={showActiveTodos}
        >
          Active
        </button>
        <button
          className={`${isCompleted && "text-primary"}  ${
            isDark
              ? "hover:text-darkTheme-lightGrayishBlueHover"
              : "hover:text-lightTheme-veryDarkGrayishBlue"
          } `}
          onClick={showCompletedTodos}
        >
          Completed
        </button>
      </div>
      <button
        className={`${
          isDark
            ? "hover:text-darkTheme-lightGrayishBlue"
            : "hover:text-lightTheme-veryDarkGrayishBlue"
        } font-normal`}
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoActions;
