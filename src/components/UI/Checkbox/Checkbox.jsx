import { useTodo } from "../../../contexts/TodoContext";
import "./Checkbox.css";

const Checkbox = ({ toggleComplete, completed }) => {
  const { isDark } = useTodo();
  return (
    <div className="flex justify-center items-center">
      <div
        className={`checkbox-wrapper ${
          isDark
            ? "bg-darkTheme-veryDarkGrayishBlue-hover"
            : "bg-lightTheme-veryLightGrayishBlue"
        }`}
      >
        <input
          type="checkbox"
          className={`custom-checkbox ${
            isDark
              ? "bg-darkTheme-veryDarkDesaturatedBlue"
              : "bg-lightTheme-veryLightGray"
          }`}
          checked={completed}
          onChange={toggleComplete}
        />
      </div>
    </div>
  );
};

export default Checkbox;
