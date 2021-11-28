import React, { Component } from "react";
import Answer from "../components/Answer";

export default class AnswerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreating: false,
      form: {
        comment: "",
        question_id: this.props.question.id,
        user_id: this.props.current_user.id,
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
        <button onClick={this.toggleCreate}>Reply</button>
        {this.state.isCreating && (
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} htmlFor="comment"></input>
            <button type="submit">Submit</button>
            <button onClick={this.toggleCreate}>Cancel</button>
          </form>
        )}
      </div>
    );
  }
}
