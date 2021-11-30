import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AboutUsPage from "./AboutUsPage";

Enzyme.configure({ adapter: new Adapter() });

describe("testing about us page", () => {
  it("should render, has an h1 header, has 4 cards, 4 images, and 4 card bodies ", () => {
    const about = shallow(<AboutUsPage />);
    expect(about.length).toEqual(1);
    expect(about.find("h1").text()).toEqual("Meet the Team");
    expect(about.find(".about-me-card").length).toEqual(4);
    expect(about.find("img").length).toEqual(5);
    expect(about.find(".about-me-card-content").length).toEqual(4);
  });
});
