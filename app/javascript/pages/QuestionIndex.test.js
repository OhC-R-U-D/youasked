import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionIndex from "./QuestionIndex";
import mockQuestion from "../components/mockQuestion";
import mockSession from "../components/mockSession";
import Button from "@mui/material/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("When QuestionIndex renders and a user is logged in", () => {
  it(" renders a navlink and a div", () => {
    const questionIndex = shallow(
      <QuestionIndex
        current_user={mockSession[0].current_user}
        questions={mockQuestion}
      />
    );
    expect(questionIndex.find("NavLink").length).toEqual(1);
    expect(questionIndex.find("div").length).toEqual(2);
  });
});

describe("When QuestionIndex renders and a user is not logged in", () => {
  it(" only renders a div", () => {
    const questionIndex = shallow(
      <QuestionIndex current_user={false} questions={mockQuestion} />
    );
    expect(questionIndex.find("NavLink").length).toEqual(0);
    expect(questionIndex.find("div").length).toEqual(2);
  });
});
