import React, { Component } from "react";
import Answer from "../components/Answer";


export default class AnswerIndex extends Component {
  render() {
    return (
      <div>
        <h3>AnswerIndex Rendered</h3>
        <br />
        {this.props.answers.map((answer) => {
          return (
            <Answer answer={answer} />
          );
        })}
      </div>
    );
  }
}
