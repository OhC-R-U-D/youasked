import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionNew from "./QuestionNew";
import MockSession from "../components/mockSession";

Enzyme.configure({ adapter: new Adapter() });

describe("When QuestionNew page renders", () => {
  it("has a label and an image", () => {
    const newQuestion = shallow(
      <QuestionNew current_user={MockSession[0].current_user} />
    );
    expect(newQuestion.find("img").length).toEqual(1);
    expect(newQuestion.length).toEqual(1);
  });
});
