import React from "react";
import { shallow } from "enzyme";
import Heading from "../index";

describe("Heading component tests", () => {
  it("should render", () => {
    const wrapper = shallow(<Heading></Heading>);
  });
  it("should have a child text", () => {
    const wrapper = shallow(
      <Heading>
        <p>Heading text</p>
      </Heading>
    );
    const heading = wrapper.find("p");

    expect(heading.text()).toBe("Heading text");
  });
});
