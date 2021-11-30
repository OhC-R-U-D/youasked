import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProtectedAnswerCard from "./ProtectedAnswerCard";
import MockAnswer from "./mockAnswer";

Enzyme.configure({ adapter: new Adapter() });

describe("When ProtectedAnswerCard renders", () => {
  it("displays nav links", () => {
    const answer = shallow(<ProtectedAnswerCard answer={MockAnswer} />);
    const navLinkWrapper = answer.find("NavLink");
    expect(navLinkWrapper.length).toEqual(1);
  });
});
