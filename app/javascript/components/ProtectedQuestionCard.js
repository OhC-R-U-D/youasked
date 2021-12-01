import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 360 }}>
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
          <Button size="small" variant="contained">
            See Answers
          </Button>
        </NavLink>
        <a
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => {
            confirm("Are you sure you want to delete this question?") &&
              props.deleteQuestion(props.question.id);
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
