import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AboutUsPage from "./AboutUsPage";

Enzyme.configure({ adapter: new Adapter() });

describe("testing about us page", () => {
  it("should render content", () => {
    const about = shallow(<AboutUsPage />);
    expect(about.length).toEqual(1);
    expect(about.find("Grid").length).toEqual(2);
    expect(about.find("Card").length).toEqual(1);
    expect(about.find("CardContent").length).toEqual(1);
  });
});
