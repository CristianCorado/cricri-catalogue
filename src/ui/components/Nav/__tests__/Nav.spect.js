import React from "react";
import { shallow } from "enzyme";
import Nav from "../index";
import { Link } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/"
  }),
}));

describe("Nav component tests", () => {
  it("should render", () => {
    const wrapper = shallow(<Nav></Nav>);
  });
  it("should render just 2 element in menu", () => {
    const wrapper = shallow(<Nav></Nav>);
    const items = wrapper.find(Link);

    expect(items).toHaveLength(2); 
  });
});
