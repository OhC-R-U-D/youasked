import React, { Component } from "react";
import landingpage from "../assets/landingpage.jpg";
import landingmedia from "../assets/landingpage.gif";
import Box from "@mui/material/Box";
import logo from "../assets/logo.png";
  import { ImageBackground } from "react";

export default class Home extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <>
        <div className="sign-up-gif">
          {!logged_in && (
            <img
              src={landingmedia}
              alt="landingmedia"
              className="landingmedia"
            />
          )}
        </div>
        <div className="landing-container">
          <div className="landing-images">
            <img src={logo} alt="logo" className="logo" />
            <img src={landingpage} alt="landingpage" className="landingpage" />
          </div>
          <div>
            <Box
              class="landing-quote"
              sx={{
                display: "flex",
                justifyContent: "center",
                borderRadius: 16,
              }}
            >
              <p>
                Sometimes life isn’t black and white and we’re faced with
                questions, but let’s keep it light! Post your questions if you
                have one now… but responses may be below the brow.
              </p>
            </Box>
          </div>
        </div>
      </>
    );
  }
}
