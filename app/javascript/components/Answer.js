import React, { Component } from "react";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";

export default class Answer extends Component {
    //add show method endpoint
    //add on submit handler that updates the answer - need to update the state of wherever the answer is coming from (App.js)
    //Add an isEditing state to know whether you can render the answer
    //a button to toggle editing state -> only rendered if the user = 
    //conditionally render either the answer or the form depending on if isEditing is true
  render() {
    return (
      <>
        <Stack key={this.props.answer.id} spacing={2} sx={{ maxWidth: 600 }}>
            <SnackbarContent message={this.props.answer.comment} />
            <form onSubmit={this.handleSubmit}>
                    <input for="comment"></input>
                    <button type="submit">Submit</button>
            </form>
        </Stack>
      </>
    );
  }
}



