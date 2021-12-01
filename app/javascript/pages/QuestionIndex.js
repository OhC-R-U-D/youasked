import React, { Component } from "react";
import QuestionCard from "../components/QuestionCard";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

export default class QuestionIndex extends Component {
  render() {
    return (
      <>
        <div className="question-index-button">
          {this.props.current_user && (
            <NavLink to={"/questionnew"}>
              <Button size="large" variant="text">
                ASK A QUESTION!
              </Button>
            </NavLink>
          )}
        </div>
        <div className="question-index-container">
          {this.props.questions &&
            this.props.questions.map((question) => {
              return <QuestionCard key={question.id} question={question} />;
            })}
        </div>
      </>
    );
  }
}
