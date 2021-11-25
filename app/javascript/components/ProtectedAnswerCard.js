import * as React from "react";
import { Card, CardContent } from "@mui/material";
import { NavLink } from "react-router-dom";
import UnstyledButtonCustom from "./UnstyledButtonCustom";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Stack key={props.answer.id} spacing={2} sx={{ maxWidth: 600 }}>
          <SnackbarContent message={props.answer.comment} />
        </Stack>
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
