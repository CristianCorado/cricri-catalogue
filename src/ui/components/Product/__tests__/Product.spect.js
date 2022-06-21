import React from "react";
import { shallow } from "enzyme";
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

    expect(wrapper.find("span").text()).toBe("$ 1000");
  });
});
