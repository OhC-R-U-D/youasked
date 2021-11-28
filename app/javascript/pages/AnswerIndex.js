import React, { Component } from "react";
import Answer from "../components/Answer";


export default class AnswerIndex extends Component {
  render() {
    return (
      <div>
        <br />
        {this.props.answers.map((answer) => {
          return (
            <Answer key={answer.id} answer={answer} current_user={this.props.current_user} updateAnswer={this.props.updateAnswer} question={this.props.question}/>
          );
        })}
      </div>
    );
  }
}
