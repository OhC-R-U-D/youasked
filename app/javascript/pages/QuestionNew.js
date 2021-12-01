import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import formpic from "../assets/questionform.jpeg";
import { Redirect } from "react-router-dom";

export default class QuestionNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        post: "",
        img_url: "",
        user_id: this.props.current_user.id,
      },
      submitted: false,
    };
  }
  handleChange = (name, e) => {
    let { form } = this.state;
    form[name] = e.target.value;
    this.setState({ form: form });
  };
  handleSubmit = () => {
    this.props.createNewQuestion(this.state.form);
    this.setState({ submitted: true });
  };
  render() {
    return (
      <Box
        id="form"
        component="form"
        sx={{ "&.MuiTextFeild-root": { m: 1, width: "25ch" } }}
        noValidateautoComplete="off"
      >
        <div>
          <img src={formpic} alt="formpic" className="formpic" />
          <br />
          <br />
          <TextField
            id="outlined-required"
            label="URL"
            onChange={(e) => {
              console.log(e);
              this.handleChange("img_url", e);
            }}
            value={this.state.form.img_url}
          />
          <br />
          <TextField
            fullWidth
            sx={{ m: 1 }}
            id="question-box"
            label="SPILL YOUR GUTS HERE"
            onChange={(e) => this.handleChange("post", e)}
            value={this.state.form.post}
          />
          <br />
          <Button size="medium" variant="contained" onClick={this.handleSubmit}>
            Submit
          </Button>
          {this.state.submitted && <Redirect to="/questionindex" />}
        </div>
      </Box>
    );
  }
}
