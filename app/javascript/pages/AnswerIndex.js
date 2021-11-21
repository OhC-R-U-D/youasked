import React, { Component } from "react";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";

export default class AnswerIndex extends Component {
  render() {
    return (
      <div>
        <h3>These are the Answers</h3>
        <br />
        {this.props.answers.map((answer) => {
          return (
            <Stack key={answer.id} spacing={2} sx={{ maxWidth: 600 }}>
              <SnackbarContent message={answer.comment} />
            </Stack>
          );
        })}
      </div>
    );
  }
}
