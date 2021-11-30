import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Contact from "../pages/Contact";

Enzyme.configure({ adapter: new Adapter() });

describe("testing Content", () => {
  it("should render contact grid ", () => {
    const about = shallow(<Contact />);
    expect(about.find("h3").text()).toEqual("Contact Us");
    expect(about.find("span").text()).toEqual(
      "Thank you for your message, we will be in touch!"
    );
  });
});
