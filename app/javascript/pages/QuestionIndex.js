import React, { Component } from "react";
import QuestionCard from "../components/QuestionCard";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
export default class QuestionIndex extends Component {
  render() {
    return (
      <>
        <div className="question-index-button">
          {this.props.current_user && (
            <NavLink to={"/questionnew"}>
              <Button size="large" variant="text">
                ASK A QUESTION!
              </Button>
            </NavLink>
          )}
        </div>

        <Box className="question-index-container" sx={{ minHeight: 829 }}>
          <Masonry columns={3} spacing={3}>
            {this.props.questions &&
              this.props.questions.map((question) => {
                return <QuestionCard key={question.id} question={question} />;
              })}
          </Masonry>
        </Box>
      </>
    );
  }
}
