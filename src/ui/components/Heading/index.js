import React from "react";

const Heading = (props) => {
  const style = {
    padding: "0px",
    margin: "0px",
    overflowWrap: "break-word",
    fontWeight: "300",
    color: "rgb(75, 40, 109)",
    fontSize: "1.45rem",
    lineHeight: "1.14"
  };

  return <h1 style={style}> { props.children } </h1>;
};

export default Heading;
