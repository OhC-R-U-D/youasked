import React, { Component } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import AnswerIndex from "../pages/AnswerIndex";

export default class QuestionShow extends Component {
  render() {
    const { question } = this.props;
    console.log(question);
    return (
      <div className="question-show-container">
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: "1.5vw" }}>Question: {question.post}</Typography>
          </CardContent>

          {question.img_url && (
            <CardMedia
              component="img"
              a
              sx={{ width: "50%" }}
              image={question.img_url}
            />
          )}
          <Typography sx={{ fontSize: "1.5vw" }}>Comments:</Typography>
          <AnswerIndex {...this.props} />
        </Card>
      </div>
    );
  }
}
