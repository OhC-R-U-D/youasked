import * as React from "react";
import { Card, CardContent, Paper, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import UnstyledButtonCustom from "./UnstyledButtonCustom";

export default function MultiActionAreaCard(props) {
  return (
    <Card key={props.answer.id} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Paper sx={{ maxWidth: 400, my: 1, mx: "auto", p: 2 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs>
              <Typography>{props.answer.comment}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </CardContent>
      <div className="navlinks">
        <NavLink
          to={`/questionshow/${props.answer.question_id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {UnstyledButtonCustom("See Question")}
        </NavLink>
        <a
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => {
            confirm("Are you sure you want to delete this answer?") &&
              props.deleteAnswer(props.answer.id);
          }}
        >
          {UnstyledButtonCustom("Delete Answer")}
        </a>
      </div>
    </Card>
  );
}
