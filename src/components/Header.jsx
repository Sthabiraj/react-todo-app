import { useTodo } from "../contexts";

const Header = ({ toggleTheme }) => {
  const { isDark } = useTodo();

  return (
    <div className="flex justify-between w-screen max-w-lg mb-8 mt-20 ">
      <h1 className="font-bold text-lightTheme-veryLightGray text-4xl tracking-wider">
        T O D O
      </h1>
      <button onClick={toggleTheme}>
        <img
          src={`src/assets/icons/icon-${isDark ? "sun" : "moon"}.svg`}
          alt="sun icon"
        />
      </button>
    </div>
  );
};

export default Header;
