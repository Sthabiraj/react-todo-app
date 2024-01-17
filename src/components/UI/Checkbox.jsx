const Checkbox = ({ toggleComplete, completed }) => {
  return (
    <div className="flex justify-center items-center">
      <input
        type="checkbox"
        className="checkbox checkbox-md rounded-xl"
        checked={completed}
        onChange={toggleComplete}
      />
    </div>
  );
};

export default Checkbox;
