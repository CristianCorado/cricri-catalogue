import React from "react";
import { shallow } from "enzyme";
import PriceLockup from "@tds/core-price-lockup";

import Product from "../index";

const dummyProduct = {
  brand: "Dummy",
  name: "Dummy product",
  price: "1000",
};

describe("Product component tests", () => {
  it("should render", () => {
    const wrapper = shallow(
      <Product image="" product={dummyProduct}></Product>
    );
  });
  it("should show sended price", () => {
    const wrapper = shallow(
      <Product image="" product={dummyProduct}></Product>
    );

    const price = wrapper.find(PriceLockup).dive().children().first();

    expect(price.text()).toBe("$1000");
  });
});
