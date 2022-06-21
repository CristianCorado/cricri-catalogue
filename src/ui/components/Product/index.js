import React from "react";
import Card from "@tds/core-card";
import Heading from "@tds/core-heading";
import Image from "@tds/core-image";
import PriceLockup from "@tds/core-price-lockup";

// import Card from "../Card";
// import Heading from "../Heading"
// import Note from "../Note";

const Product = (props) => {
  return (
    <Card>
      <Image
        src={props.image}
        rounded="corners"
        width={200}
        height={200}
        alt={props.product.name}
      />
      <h3>{props.product.brand}</h3>
      <Heading level="h2">{props.product.name}</Heading>
      {/* <span>$ {props.product.price}</span> */}
      <PriceLockup
        size="medium"
        price={props.product.price}
        bottomText="TELUS Easy Payment and Bring-It-Back applied. Read legal footnote Taxes due upfront."
        signDirection="left"
      />
      {/* <Note></Note> */}
    </Card>
  );
};

export default Product;
