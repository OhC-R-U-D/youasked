import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ashleyPic from "../assets/ashley.jpeg";
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
          "Ashley Mariko Lappies, San Diego native, has had a LONG restaurant and hospitality career and is ready to jump behind a computor, push her glasses up her nose, and never look back. Her favorite hobbies are reading sci-fi novels, hiking just about any terrain and watching tiktok until she passes out. ",
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
          "Tech lead of the Oh CRUD! team. Former capital asset accountant now turned full stack software developer, Rebecca is excited about problem solving and continous learning. She strives to write concise efficient code and create memorable user experiences. In her free time, she likes to boulder, find awesome eateries, and spend time with her family.",
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
