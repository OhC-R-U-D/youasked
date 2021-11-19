import React, { Component } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import ashleyPic from "../assets/ashley.png";
import kevinPic from "../assets/kevin.png";
import rebeccaPic from "../assets/rebecca.png";
import shaunPic from "../assets/shaun.png";


export default class AboutUsPage extends Component {    
  render() {
    const team = [
      {
        id: 1,
        name: "Ashley Lappies",
        img: ashleyPic,
        blurb:
          "Sandy is a thrill seeker who loves extreme sports and karate. Having come from the state of Texas, she has a Southern drawl and a love for rodeos. She works as a scientist and built both her treedome and air suit herself. She is also a member of the Gal Pals along with Karen, Mrs. Puff, and Pearl.",
      },
      {
        id: 2,
        name: "Kevin Silver",
        img: kevinPic,
        blurb:
          "Eugene Harold Krabs, more commonly known as Mr. Krabs born November 30, 1942, is one of the ten main characters in the SpongeBob SquarePants franchise. He is a red crab who lives in an anchor with his daughter, Pearl, who is a young whale. He is the owner and founder of the Krusty Krab restaurant as well as the employer of both SpongeBob and Squidward.",
      },
      {
        id: 3,
        name: "Rebecca Reynolds",
        img: rebeccaPic,
        blurb:
          "Meyaiovah! Mee hoy minoy! Meah froyay! Neofineyin! Meyaiovah! Mee hoy minoy! Meah froyay! Neofineyin! Meyaiovah! Mee hoy minoy! Meah froyay! Neofineyin! Meyaiovah! Mee hoy minoy! Meah froyay! Neofineyin! Meyaiovah! Mee hoy minoy! Meah froyay! Neofineyin!",
      },
      {
        id: 4,
        name: "Shaun Sharp",
        img: shaunPic,
        blurb:
          "SpongeBob SquarePants born July 14, 1986 is the one of the ten main characters of the animated franchise of the same name. SpongeBob is a childish, joyful, and clumsy sea sponge who lives in a pineapple with his pet snail Gary in the underwater city of Bikini Bottom. SpongeBob is very good-natured and loves to hang out with his best friend Patrick.",
      },
    ];
    return (
      <div className="about-us-page">
        <h1>Meet the Team</h1>
        <br />
        <br />
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          {team.map((person) => {
            return (
              <Grid key={person.id} item xs={6}>
                <Card className="about-me-card" sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {person.name}
                    </Typography>
                    <img src={person.img} alt="person" />

                    <Typography variant="body2">{person.blurb}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}


