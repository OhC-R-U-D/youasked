import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ErrorPage from "./404Page";

Enzyme.configure({ adapter: new Adapter() });

describe("testing 404 page", () => {
  it("should render 1 img ", () => {
    const error = shallow(<ErrorPage />);
    expect(error.find("img").length).toEqual(1);
  });
});
