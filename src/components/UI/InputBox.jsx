const InputBox = ({ isDark, value, handleChange, handleKeyPress }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Create a new todo..."
        className={`bg-transparent focus:outline-none font-josefinSans text-base ${
          isDark
            ? "text-darkTheme-lightGrayishBlue placeholder-darkTheme-darkGrayishBlue"
            : "text-lightTheme-veryDarkGrayishBlue placeholder-lightTheme-darkGrayishBlue"
        } w-full`}
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
      />
    </div>
  );
};

export default InputBox;
