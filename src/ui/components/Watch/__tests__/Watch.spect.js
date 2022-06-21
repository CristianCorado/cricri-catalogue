import React from "react";
import { shallow } from "enzyme";
import Heading from "@tds/core-heading";

import Watch from "../index";
// import Heading from "../../Heading";
import { getAll } from "../../../services/watch.service";
import Product from "../../Product";

jest.mock("../../../services/watch.service", () => {
  return {
    getAll: jest.fn(),
  };
});

describe("Watch component tests", () => {
  it("should render", () => {
    getAll.mockImplementation(() => ({
      data: [
        {
          name: "Apple Watch Series 6",
          brand: "Apple",
          price: 529,
        },
        {
          name: "Apple Watch SE",
          brand: "Apple",
          price: 369,
        }
      ],
    }));

    const wrapper = shallow(<Watch></Watch>);

    expect(wrapper.find(Product).length).toBe(2);
  });
  it("should have Watch catalogue title", () => {
    const wrapper = shallow(<Watch></Watch>);

    expect(wrapper.find(Heading).first().children().text()).toBe(
      "Watches Catalogue"
    );
  });
  it("should show error message on network error", () => {
    getAll.mockImplementation(() => ({
      data: [],
      error: {
        message: "error",
      },
    }));

    const wrapper = shallow(<Watch></Watch>);

    expect(wrapper.find("div FlexGrid Heading").children().first().text()).toContain(
      "Error fetching data:"
    );
  });
});
