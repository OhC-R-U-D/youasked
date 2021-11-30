import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProtectedQuestionCard from "./ProtectedQuestionCard";
import MockQuestion from "./mockQuestion";

Enzyme.configure({ adapter: new Adapter() });

describe("When ProtectedQuestionCard renders", () => {
  it("displays nav links", () => {
    const question = shallow(<ProtectedQuestionCard question={MockQuestion} />);
    const navLinkWrapper = question.find("NavLink");
    expect(navLinkWrapper.length).toEqual(1);
  });
});
