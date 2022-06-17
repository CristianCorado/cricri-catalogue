import React from "react";
import Nav from "../Nav";
import Heading from "../Heading";
import Product from "../Product";
import iphoneImage from "../../assets/iphone.jpg";

import { getAll } from "../../services/iphone.service";

const Iphone = () => {
  const { data } = getAll();

  const iphoneList = data.map((iphone) => {
    return <Product image={iphoneImage} product={iphone}></Product>;
  });

  return (
    <div>
      <Heading>Iphone Catalogue</Heading>
      <Nav></Nav>
      <div style={{ display: "flex" }}>{iphoneList}</div>
    </div>
  );
};

export default Iphone;
