import React, { Component } from "react";
import QuestionCard from "../components/QuestionCard";

export default class QuestionIndex extends Component {
  render() {
    return (
      <div className="question-index-container">
        {this.props.questions &&
          this.props.questions.map((question) => {
            return <QuestionCard key={question.id} question={question} />;
          })}
      </div>
    );
  }
}
