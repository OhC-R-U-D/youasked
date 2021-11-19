import React, { Component } from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default class AboutUsPage extends Component {  
    render() {
         const team = [
           { name: "Ashley Lappies", img: "", blurb: "" },
           { name: "Kevin Silver", img: "", blurb: "" },
           { name: "Rebecca Reynolds", img: "", blurb: "" },
           { name: "Shaun Sharp", img: "", blurb: "" },
         ];
        return (
          <div className="about-us-page">
            <h1>Meet the Team</h1>

            {team.map(person => {
                return (
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Name
                      </Typography>

                      <Typography variant="body2">lorem ipsum</Typography>
                    </CardContent>
                  </Card>
                );})} 
          </div>
        );
    }
}

