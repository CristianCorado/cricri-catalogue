import React from "react";

const Card = (props) => {
  const style = {
    padding: "16px",
    border: "1px solid rgb(232, 232, 232)",
    borderRadius: "3px",
    width: "min-content",
    display: "flex",
    margin: "10px",
    boxShadow: "1px 1px 1px 1px #8F8F8F",
  };

  return <div style={style}>{props.children}</div>;
};

export default Card;
