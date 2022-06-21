import React from "react";
import Nav from "../Nav";
import Heading from "../Heading";
import Product from "../Product";
import iphoneImage from "../../assets/iphone.jpg";

import { getAll } from "../../services/iphone.service";

const Iphone = () => {
  const { data, error } = getAll();

  const iphoneList = error ? <Heading>Error fetching data: {error.message}</Heading> : data.map((iphone) => {
    return <Product key={iphone.name} image={iphoneImage} product={iphone}></Product>;
  });

  return (
    <div>
      <Heading>Iphone Catalogue</Heading>
      <Nav></Nav>
      <div style={{ display: "flex", alignContent: "center" }}>{iphoneList}</div>
    </div>
  );
};

export default Iphone;
