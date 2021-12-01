import React, { Component } from "react";
import Answer from "../components/Answer";
import { Button } from "@mui/material";

export default class AnswerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreating: false,
      form: {
        comment: "",
        question_id: this.props.question.id,
        user_id: this.props.current_user ? this.props.current_user.id : "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNewAnswer(this.state.form);
    this.toggleCreate();
  };

  handleChange = (e) => {
    let { form } = this.state;
    form.comment = e.target.value;
    this.setState({ form: form });
  };

  toggleCreate = () => {
    this.setState({ isCreating: !this.state.isCreating });
  };

  render() {
    return (
      <div>
        <br />
        {this.props.answers.map((answer) => {
          return (
            <Answer
              key={answer.id}
              answer={answer}
              current_user={this.props.current_user}
              updateAnswer={this.props.updateAnswer}
              question={this.props.question}
            />
          );
        })}
        {!this.state.isCreating && this.props.current_user && (
          <div className="button-wrapper">
            <Button
              size="small"
              variant="contained"
              onClick={this.toggleCreate}
            >
              Reply
            </Button>
          </div>
        )}
        {this.state.isCreating && (
          <div className="answer-form">
            <form>
              <input onChange={this.handleChange} htmlFor="comment"></input>
              <Button
                size="small"
                variant="contained"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={this.toggleCreate}
              >
                Cancel
              </Button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
