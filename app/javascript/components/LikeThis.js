import React, { Component } from "react";
import Button from "@mui/material/Button";

export default class LikeThis extends Component {
  handleLike() {
    fetch("/favorites", {
      body: JSON.stringify({favorite:{
          user_id: this.props.user_id,
          favorite_type: this.props.favorite_type,
          favorite_id: this.props.favorite_id
      }}),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Something went wrong, please check your submission.");
        }
        return response.json();
      })
      .catch((errors) => console.log("Favorites Create Errors:", errors));
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleLike.bind(this)}>Like</Button>
      </div>
    );
  }
}
