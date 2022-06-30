import React from "react";
import FlexGrid from "@tds/core-flex-grid";
import Box from "@tds/core-box";
import Heading from "@tds/core-heading";

import Nav from "../Nav";
// import Heading from "../Heading";
import Product from "../Product";
import iphoneImage from "../../assets/iphone.jpg";

import { useGetAll } from "../../services/iphone.service";

const Iphone = () => {
  const { data, error } = useGetAll();
  
  const iphoneList = error ? (
    <Heading level="h1">Error fetching data: {error.message}</Heading>
  ) : (
    data.map((iphone) => {
      return (
        <FlexGrid.Col key={iphone.name}>
          <Box vertical={2}>
            <Product image={iphoneImage} product={iphone}></Product>
          </Box>
        </FlexGrid.Col>
      );
    })
  );

  return (
    <div>
      <Heading level="h1">Iphone Catalogue</Heading>
      <Nav></Nav>
      <FlexGrid>
        <FlexGrid.Row>{iphoneList}</FlexGrid.Row>
      </FlexGrid>
    </div>
  );
};

export default Iphone;
