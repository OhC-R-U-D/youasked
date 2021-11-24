import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import UnstyledButtonCustom from "./UnstyledButtonCustom";

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.question.post}
        </Typography>
      </CardContent>
      {props.question.img_url && (
        <CardMedia
          component="img"
          height="250"
          image={props.question.img_url}
        />
      )}
      <div className="navlinks">
      <NavLink
        to={`/questionshow/${props.question.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {UnstyledButtonCustom("See Answers")}
      </NavLink>
      <a
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => {
          confirm("Are you sure you want to delete this question?") &&
            props.deleteQuestion(props.question.id);
        }}
      >
        {UnstyledButtonCustom("Delete Question")}
      </a>
      </div>
    </Card>
  );
}
