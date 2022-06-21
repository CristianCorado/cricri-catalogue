import React from "react";
import { shallow } from "enzyme";
import Card from "../index";

describe("Card component tests", () => {
  it("should render", () => {
    const wrapper = shallow(<Card></Card>);
  });
  it("should have a child text", () => {
    const wrapper = shallow(
      <Card>
        <h1>child</h1>
      </Card>
    );
    const child = wrapper.find("h1");
    
    expect(child.text()).toBe("child");
  });
});
