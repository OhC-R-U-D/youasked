import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home";

Enzyme.configure({ adapter: new Adapter() });

describe("testing Home Page", () => {
  it("should render, 3 images, and 1 Box wraper", () => {
    const home = shallow(<Home />);
    expect(home.length).toEqual(1);
    const boxWrapper = home.find("Box");
    expect(home.find("img").length).toEqual(3);
  });
});
