import React, { Component } from "react";
import ProtectedQuestionCard from "../components/ProtectedQuestionCard";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
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
              <Button variant="outline">Ask!</Button>
            </NavLink>
          </div>
          <div id="QACol">
            <h1>My Questions</h1>
            {this.props.questions &&
              this.props.questions.map((question) => {
                return (
                    <ProtectedQuestionCard key={question.id} deleteQuestion={this.props.deleteQuestion} question={question} />
                );
              })}
          </div>
          <div id="QACol">
            <h1>My Answers</h1>
            {this.props.answers.map((answer) => {
              return (
                <Stack key={answer.id} spacing={2} sx={{ maxWidth: 600 }}>
                  <SnackbarContent message={answer.comment} />
                </Stack>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
