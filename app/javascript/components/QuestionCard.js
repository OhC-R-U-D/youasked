import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <NavLink to={`/questions/${props.question.id}`}>
          {props.question.img_url && (
            <CardMedia
              component="img"
              a
              height="200"
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
