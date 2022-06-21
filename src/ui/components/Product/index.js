import React from "react";
import Card from "../Card";
import Heading from "../Heading"
import Note from "../Note";

const Product = (props) => {
  const style = {
    overflowWrap: "break-word",
    color: "rgb(42, 44, 46)",
    fontWeight: "700",
    fontSize: "1rem",
    lineHeight: "1.25",
    letterSpacing: "-0.6px",
    display: "flex",
    flexDirection: "column",
    margin: "15px",
  };

  return (
    <Card>
      <div style={style}>
        <img src={props.image} />
        <h3>{props.product.brand}</h3>
        <Heading>{props.product.name}</Heading>
        <span>$ {props.product.price}</span>
        <Note></Note>
      </div>
    </Card>
  );
};

export default Product;
