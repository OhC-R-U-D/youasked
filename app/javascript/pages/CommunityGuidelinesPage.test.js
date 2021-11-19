import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CommunityGuideLinesPage from "../pages/CommunityGuidelinesPage";

Enzyme.configure({ adapter: new Adapter() });

describe("When Guidelines renders", () => {
  it("displays a heading", () => {
    const guidelinesHeading = shallow(<CommunityGuideLinesPage />).find("h1");
    expect(guidelinesHeading.text()).toEqual("You Asked! Community GuideLines");
  });
});
