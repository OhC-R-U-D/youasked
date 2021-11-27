import React, { Component } from "react";
import { Paper, Grid, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: this.props.current_user
        ? this.props.answer.user_id === this.props.current_user.id
        : "",
      form: {
        comment: this.props.answer ? this.props.answer.comment : "",
        question_id: this.props.answer
          ? this.props.answer.question_id
          : this.props.question.id,
        user_id: this.props.answer
          ? this.props.answer.user_id
          : this.props.current_user.id,
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
    this.toggleEdit();
  };
  handleChange = (e) => {
    let { form } = this.state;
    form.comment = e.target.value;
    this.setState({ form: form });
  };

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    const { answer } = this.props;
    return (
      <>
        <Paper sx={{ my: 1, mx: "auto", p: 2 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs>
              <Typography>
                <span style={{ fontWeight: "bold" }}>{answer.user.alias}</span>
              </Typography>
              <Typography>{!this.state.isEditing && answer.comment}</Typography>
              {this.state.isEditing && (
                <form onSubmit={this.handleSubmit}>
                  <input onChange={this.handleChange} htmlFor="comment"></input>
                  <button type="submit">Submit</button>
                </form>
              )}
            </Grid>
            <Grid item>
              {this.state.isEditable && (
                <button onClick={this.toggleEdit}>
                  {" "}
                  <EditIcon />{" "}
                </button>
              )}
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}
