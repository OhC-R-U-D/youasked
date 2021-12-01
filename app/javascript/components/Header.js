import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Navbar } from "reactstrap";
import { Stack, Button } from "@mui/material";

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    return (
      <header>
        <Navbar expand fixed="top">
          <Stack spacing={2} direction="row">
            <NavLink to={"/"}>
              <span className="home-icon">
                {" "}
                <HomeIcon fontSize="large" />{" "}
              </span>
            </NavLink>

            <NavLink to={"/questionindex"}>
              <Button size="medium" variant="contained">
                See Questions
              </Button>
            </NavLink>
          </Stack>

          <Stack spacing={3} direction="row">
            {logged_in && (
              <span className="user-name">{`Hello ${current_user.alias}!  `}</span>
            )}
            {logged_in && (
              <NavLink to={"/protectedindex"}>
                <Button size="medium" variant="contained">
                  My Profile
                </Button>
              </NavLink>
            )}
            {logged_in && (
              <a href={sign_out_route}>
                <Button size="medium" variant="contained">
                  Sign Out
                </Button>
              </a>
            )}
            {!logged_in && (
              <div>
                <a href={sign_in_route}>
                  <Button size="medium" variant="contained">
                    Log In
                  </Button>
                </a>
              </div>
            )}
            {!logged_in && (
              <a href={new_user_route}>
                <Button size="medium" variant="contained">
                  Sign Up
                </Button>
              </a>
            )}
          </Stack>
        </Navbar>
      </header>
    );
  }
}
