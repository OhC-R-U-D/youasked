import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ashleyPic from "../assets/ashley.png";
import kevinPic from "../assets/kevin.png";
import rebeccaPic from "../assets/rebecca.png";
import shaunPic from "../assets/shaun.png";
import teamOhCrud from "../assets/Team_OhCrud.png";

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
          "Kevin was the Product Manager on the OhCrud! FullStack, Junior Development team. He assisted in many tasks throughout the You Asked? App build. Working on this team was very exciting.  He was able to learn a lot from his fellow teammates. He is most proud of his ability to incorporate a third party supported email service in order to build a React contact form without a backend.  In addition, he was able to bond with his son (borrow his design skills) to create the Team and App logos.",
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
        <img src={teamOhCrud} alt="teamOhCrud" className="team-pic" />
        <br />
        <br />
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          {team.map((person) => {
            return (
              <Grid key={person.id} item xs={6}>
                <Card className="about-me-card" sx={{ minWidth: 275 }}>
                  <CardContent className="about-me-card-content">
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
