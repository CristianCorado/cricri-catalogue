import React from "react";
import FlexGrid from "@tds/core-flex-grid";
import Box from "@tds/core-box";
import Heading from "@tds/core-heading";

import Nav from "../Nav";
// import Heading from "../Heading";
import Product from "../Product";
import watchImage from "../../assets/watch.jpg";
import { getAll } from "../../services/watch.service";

const Watch = () => {
  const { data, error } = getAll();

  const watchList = error ? (
    <Heading level="h1">Error fetching data: {error.message}</Heading>
  ) : (
    data.map((watch) => {
      return (
        <FlexGrid.Col key={watch.name}>
          <Box vertical={2}>
            <Product image={watchImage} product={watch}></Product>
          </Box>
        </FlexGrid.Col>
      );
    })
  );

  return (
    <div>
      <Heading level="h1">Watches Catalogue</Heading>
      <Nav></Nav>
      <FlexGrid>
        <FlexGrid.Row>{watchList}</FlexGrid.Row>
      </FlexGrid>
    </div>
  );
};

export default Watch;
