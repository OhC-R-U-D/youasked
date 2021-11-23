import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <NavLink
          to={`/questionshow/${props.question.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {props.question.img_url && (
            <CardMedia
              component="img"
              a
              height="250"
              image={props.question.img_url}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.question.post}
            </Typography>
            
          </CardContent>
        </NavLink>
      </CardActionArea>
    </Card>
  );
}
