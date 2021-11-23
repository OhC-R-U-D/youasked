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
    <Card sx={{ maxWidth: 345 }}>
        <NavLink
          to={`/questionshow/${props.question.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.question.post}
            <Button variant="outlined">Delete</Button>
            </Typography>
          </CardContent>
          {props.question.img_url && (
            <CardMedia
              component="img"
              height="250"
              image={props.question.img_url}
            />
          )}
        </NavLink>
    </Card>
  );
}
