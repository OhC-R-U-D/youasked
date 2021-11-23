import React, { Component } from "react";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";


export default class Answer extends Component {

  constructor(props){
    super(props)
    this.state = {
      form: {
        comment: this.props.answer ? this.props.answer.comment : "",
        question_id: this.props.answer ? this.props.answer.question_id : this.props.question.id,
        user_id: this.props.answer ? this.props.answer.user_id : "",
      },
      submitted: false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log("form state", e)
    this.props.updateAnswer({comment: this.state.form.comment}, this.props.answer.id)
  }
  handleChange = (e) => {
    let { form } = this.state
    form.comment= e.target.value
    this.setState({form: form})
  }
    //add show method endpoint 
    //add on submit handler that updates the answer - need to update the state of wherever the answer is coming from (App.js)
    //Add an isEditing state to know whether you can render the answer
    //a button to toggle editing state -> only rendered if the user = 
    //conditionally render either the answer or the form depending on if isEditing is true
  render() {
    return (
      
        <Stack key={this.props.answer.id} spacing={2} sx={{ maxWidth: 600 }}>
            <SnackbarContent message={this.props.answer.comment} />
            <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} htmlFor="comment"></input>
                    <button type="submit">Submit</button>
            </form>
        </Stack>
    
    );
  }
}



