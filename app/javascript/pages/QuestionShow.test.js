import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionShow from "./QuestionShow";
import MockQuestion from "../components/mockQuestion";

Enzyme.configure({ adapter: new Adapter() });

describe("When QuestionNew page renders", () => {
  it("has a label, button wrapper, and a redirect", () => {
    const showQuestion = shallow(<QuestionShow question={MockQuestion[0]} />);
    expect(showQuestion.length).toEqual(1);
    expect(showQuestion.find(".question-show-container").length).toEqual(1);
  });
});
