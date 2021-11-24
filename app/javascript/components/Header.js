import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Navbar } from "reactstrap";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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
              <HomeIcon />
            </NavLink>

            <NavLink to={"/questionindex"}>
              <Button variant="text">All Questions</Button>
            </NavLink>

            {logged_in && (
              <NavLink to={"/protectedindex"}>
                <Button variant="text">My Profile</Button>
              </NavLink>
            )}
          </Stack>

          <Stack spacing={2} direction="row">
            {logged_in && (
              <div>
                {`Hello ${current_user.alias}!  `}
                <a href={sign_out_route}>
                  <Button variant="text">Sign Out</Button>
                </a>
              </div>
            )}
            {!logged_in && (
              <div>
                <a href={sign_in_route}>
                  <Button variant="text">Sign In</Button>
                </a>
              </div>
            )}
            {!logged_in && (
              <div>
                <a href={new_user_route}>
                  <Button variant="text">Sign Up</Button>
                </a>
              </div>
            )}
          </Stack>
        </Navbar>
      </header>
    );
  }
}
