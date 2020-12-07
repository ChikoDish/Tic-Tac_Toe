import React from "react";

const style = {
  background: "hotpink",
  border: "2px solid pink",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};
const Box = ({ onClick, value }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Box;
