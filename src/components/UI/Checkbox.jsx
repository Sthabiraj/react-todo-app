const Checkbox = ({ toggleCheckbox }) => {
  return (
    <div className="flex justify-center items-center">
      <input
        type="checkbox"
        className="checkbox checkbox-md rounded-xl"
        onChange={toggleCheckbox}
      />
    </div>
  );
};

export default Checkbox;
