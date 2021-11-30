import React, { Component } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import AnswerIndex from "../pages/AnswerIndex";
import LikeThis from "../components/LikeThis";

export default class QuestionShow extends Component {
  render() {
    const { question } = this.props;
    return (
      <div className="question-show-container">
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: "2vw" }}>
              <span
                style={{ fontWeight: "bold", textAlign: "center" }}
              >{`${question.user.alias}`}</span>
              {`: ${question.post}`}

            </Typography>
          </CardContent>
          <LikeThis favorite_id={question.id} favorite_type={"Question"} user_id={this.props.current_user.id}/>
          {question.img_url && (
            <CardMedia
              component="img"
              sx={{ width: "50%" }}
              image={question.img_url}
            />
          )}
          <AnswerIndex {...this.props} />
        </Card>
      </div>
    );
  }
}
