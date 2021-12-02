import * as React from "react";
import { Card, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function MultiActionAreaCard(props) {
  return (
    <Card key={props.answer.id} sx={{ maxWidth: 360 }}>
      <Typography>{props.answer.comment}</Typography>
      <div className="navlinks">
        <NavLink
          to={`/questionshow/${props.answer.question_id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button size="small" variant="contained">
            Question
          </Button>
        </NavLink>
        <a
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => {
            confirm("Are you sure you want to delete this answer?") &&
              props.deleteAnswer(props.answer.id);
          }}
        >
          <Button size="small" variant="contained">
            Delete
          </Button>
        </a>
      </div>
    </Card>
  );
}
