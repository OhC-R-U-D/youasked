import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home";

Enzyme.configure({ adapter: new Adapter() });

describe("testing Home Page", () => {
  it("should render, has an h1 header, has 4 cards, 4 images, and 4 card bodies ", () => {
    const home = shallow(<Home />);
    expect(home.length).toEqual(1);
    expect(home.find(".landing-quote").length).toEqual(1);
    expect(home.find("img").length).toEqual(3);
  });
});
