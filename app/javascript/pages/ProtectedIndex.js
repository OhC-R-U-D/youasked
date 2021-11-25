import React, { Component } from "react";
import ProtectedQuestionCard from "../components/ProtectedQuestionCard";
import ProtectedAnswerCard from "../components/ProtectedAnswerCard";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default class ProtectedIndex extends Component {
  render() {
    return (
      <>
        <div className="protected-index-container">
          <div id="profileCol">
            <h1>My Profile</h1>
            <NavLink to={"/questionnew"}>
              <Button variant="outline">Ask Question</Button>
            </NavLink>
          </div>
          <div id="QACol">
            <h1>My Questions</h1>
            {this.props.questions &&
              this.props.questions.map((question) => {
                return (
                  <ProtectedQuestionCard
                    key={question.id}
                    deleteQuestion={this.props.deleteQuestion}
                    question={question}
                  />
                );
              })}
          </div>
          <div id="QACol">
            <h1>My Answers</h1>
            {this.props.answers.map((answer) => {
              return (
                <ProtectedAnswerCard
                  key={answer.id}
                  deleteAnswer={this.props.deleteAnswer}
                  answer={answer}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
