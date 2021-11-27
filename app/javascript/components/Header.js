import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Navbar } from "reactstrap";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UnstyledButtonCustom from "./UnstyledButtonCustom";

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
            <NavLink
              to={"/questionindex"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {UnstyledButtonCustom("All Questions")}
            </NavLink>

            {logged_in && (
              <NavLink to={"/protectedindex"}>
                {UnstyledButtonCustom("My Profile")}
              </NavLink>
            )}
          </Stack>

          <Stack spacing={2} direction="row">
            {logged_in && (
              <div>
                {`Hello ${current_user.alias}!  `}
                <a href={sign_out_route}>
                {UnstyledButtonCustom("Sign Out")}
                </a>
              </div>
            )}
            {!logged_in && (
              <div>
                <a href={sign_in_route}>
                {UnstyledButtonCustom("Sign In")}
                </a>
              </div>
            )}
            {!logged_in && (
              <div>
                <a href={new_user_route}>
                {UnstyledButtonCustom("Sign Up")}
                </a>
              </div>
            )}
          </Stack>
        </Navbar>
      </header>
    );
  }
}
