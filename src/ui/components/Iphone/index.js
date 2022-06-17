import React from "react";
import Nav from "../Nav";
import Heading from "../Heading";
import Card from "../Card";

import { getAll } from "../../services/iphone.service";

const Iphone = () => {
  const { data } = getAll();

  const style = {
    overflowWrap: "break-word",
    color: "rgb(42, 44, 46)",
    fontWeight: "700",
    fontSize: "1rem",
    lineHeight: "1.25",
    letterSpacing: "-0.6px",
    display: "flex",
    flexDirection: "column",
  };

  const iphoneList = data.map((iphone) => {
    return (
      <Card>
        <div style={style}>
          <h4>{iphone.brand}</h4>
          <Heading>{iphone.name}</Heading>
          <p>{iphone.price}</p>
        </div>
      </Card>
    );
  });

  return (
    <div>
      <Heading>Iphone List Wink Wink.</Heading>
      <Nav></Nav>
      <Card>{iphoneList}</Card>
    </div>
  );
};

export default Iphone;
