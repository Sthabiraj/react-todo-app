import React from "react";

const Box = (props) => {
  return (
    <div className="rounded bg-darkTheme-veryDarkDesaturatedBlue flex gap-5 px-7 py-4 w-screen max-w-lg">
      {props.children}
    </div>
  );
};

export default Box;
