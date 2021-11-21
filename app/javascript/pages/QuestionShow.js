import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import AnswerIndex from "../pages/AnswerIndex";

export default class QuestionShow extends Component {
  render() {
    const { question } = this.props;
    console.log(question);
    return (
      <div className="question-show-container">
        <Card>
          <h1>{question.post}</h1>

          {question.img_url && (
            <CardMedia
              component="img"
              a
              sx={{ width: "35rem" }}
              image={question.img_url}
            />
          )}
          <AnswerIndex />
        </Card>
      </div>
    );
  }
}
