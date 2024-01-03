import Checkbox from "./UI/Checkbox";

const Todo = ({ isDark, value }) => {
  return (
    <div className="flex align-middle gap-5 px-6 py-5 w-screen max-w-lg border-b border-b-darkTheme-veryDarkGrayishBlue-hover">
      <Checkbox />
      <div
        className={`bg-transparent font-josefinSans text-base${
          isDark
            ? "text-darkTheme-lightGrayishBlue"
            : "text-lightTheme-veryDarkGrayishBlue"
        } w-full pt-1`}
      >
        {value}
      </div>
    </div>
  );
};

export default Todo;
