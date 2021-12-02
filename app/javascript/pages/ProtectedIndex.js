import React, { Component } from "react";
import ProtectedQuestionCard from "../components/ProtectedQuestionCard";
import ProtectedAnswerCard from "../components/ProtectedAnswerCard";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default class ProtectedIndex extends Component {
  render() {
    return (
      <>
        <div className="protected-index-container">
          <div id="profileCol">
            <h1>My Profile</h1>
            <NavLink to={"/questionnew"}>
              <Button variant="outline">Ask a Question!</Button>
            </NavLink>
          </div>

          <div id="accordion-container">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h1>My Questions</h1>
              </AccordionSummary>
              <AccordionDetails id="QCol">
                {this.props.questions &&
                  this.props.questions.map((question) => {
                    return (
                      <ProtectedQuestionCard
                        key={question.id}
                        deleteQuestion={this.props.deleteQuestion}
                        question={question}
                      />
                    );
                  })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h1>My Answers</h1>
              </AccordionSummary>
              <AccordionDetails id="ACol">
                {this.props.answers.map((answer) => {
                  return (
                    <ProtectedAnswerCard
                      key={answer.id}
                      deleteAnswer={this.props.deleteAnswer}
                      answer={answer}
                    />
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </>
    );
  }
}
