import React from "react";
import "./Cube.css";

const Cube = ({ name, color, rounded, width, height }) => {
  return (
    <div
      className="item"
      style={{
        background: color,
        width: width,
        height: height,
        borderRadius: rounded ? "50%" : "0%",
      }}
    >
      {name}
    </div>
  );
};

export default Cube;
