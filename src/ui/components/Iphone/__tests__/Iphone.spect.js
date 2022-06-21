import React from "react";
import { shallow } from "enzyme";
import Heading from "@tds/core-heading";

import Iphone from "../index";
// import Heading from "../../Heading";
import { getAll } from "../../../services/iphone.service";
import Product from "../../Product";

jest.mock("../../../services/iphone.service", () => {
  return {
    getAll: jest.fn(),
  };
});

describe("Iphone component tests", () => {
  it("should render", () => {
    getAll.mockImplementation(() => ({
      data: [
        {
          name: "iPhone 12 Pro Test",
          brand: "Apple",
          price: 1399,
        },
        {
          name: "iPhone 12 Test",
          brand: "Apple",
          price: 979,
        },
        {
          name: "iPhone SE Test",
          brand: "Apple",
          price: 599,
        },
      ],
    }));

    const wrapper = shallow(<Iphone></Iphone>);

    expect(wrapper.find(Product).length).toBe(3);
  });
  it("should have iphone catalogue title", () => {
    const wrapper = shallow(<Iphone></Iphone>);

    expect(wrapper.find(Heading).first().children().text()).toBe(
      "Iphone Catalogue"
    );
  });
  it("should show error message on network error", () => {
    getAll.mockImplementation(() => ({
      data: [],
      error: {
        message: "error",
      },
    }));
    
    const wrapper = shallow(<Iphone></Iphone>);

    expect(wrapper.find("div FlexGrid Heading").children().first().text()).toContain(
      "Error fetching data:"
    );
  });
});
