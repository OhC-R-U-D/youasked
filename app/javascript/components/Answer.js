import React, { Component } from "react";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import EditIcon from "@mui/icons-material/Edit";

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: this.props.current_user ? this.props.answer.user_id === this.props.current_user.id : "",
      form: {
        comment: this.props.answer ? this.props.answer.comment : "",
        question_id: this.props.answer
          ? this.props.answer.question_id
          : this.props.question.id,
        user_id: this.props.answer ? this.props.answer.user_id : this.props.current_user.id,
      },
      submitted: false,
      isEditing: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form state", e);
    this.props.updateAnswer(
      { comment: this.state.form.comment },
      this.props.answer.id
    );
    this.toggleEdit()
  };
  handleChange = (e) => {
    let { form } = this.state;
    form.comment = e.target.value;
    this.setState({ form: form });
  };

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    return (
      <Stack key={this.props.answer.id} spacing={2} sx={{ maxWidth: 600 }}>
        <SnackbarContent message={this.props.answer.comment} />

        {this.state.isEditable && ( //user matches current user
          <button onClick={this.toggleEdit}>
            {" "}
            <EditIcon />{" "}
          </button>
        )}

        {this.state.isEditing && (
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} htmlFor="comment"></input>
            <button type="submit">Submit</button>
          </form>
        )}
      </Stack>
    );
  }
}

          
