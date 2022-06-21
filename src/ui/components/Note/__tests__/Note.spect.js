import React from "react";
import { shallow } from "enzyme";
import Note from "../index";

describe("", () => {
  it("should render", () => {
    const wrapper = shallow(<Note></Note>);
  });
  it("should show telus text", () => {
    const wrapper = shallow(<Note></Note>);

    expect(wrapper.find("p").text()).toBe(
      "TELUS Easy Payment and Bring-It-Back applied. Read legal footnote Taxes due upfront."
    );
  });
});
