import React from "react";
import Nav from "../Nav";
import Heading from "../Heading";
import Product from "../Product";
import watchImage from "../../assets/watch.jpg";
import { getAll } from "../../services/watch.service";

const Watch = () => {
  const { data, error } = getAll();

  const watchList = error ? <Heading>Error fetching data: {error.message}</Heading> : data.map((watch) => {
    return <Product key={watch.name} image={watchImage} product={watch}></Product>;
  });

  return (
    <div>
      <Heading>Watches Catalogue</Heading>
      <Nav></Nav>
      <div style={{ display: "flex", alignContent: "center" }}>{watchList}</div>
    </div>
  );
};

export default Watch;
