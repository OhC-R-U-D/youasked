import React, { Component } from "react";
import QuestionCard from "../components/QuestionCard";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

export default class QuestionIndex extends Component {
  render() {
    return (
      <>
        {this.props.current_user && (
          <NavLink to={"/questionnew"}>
            <Button variant="text">ADD QUESTION</Button>
          </NavLink>
        )}
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
