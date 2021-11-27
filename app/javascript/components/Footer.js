import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NavItem, Nav } from "reactstrap";
import { Navbar } from "reactstrap";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UnstyledButtonCustom from "./UnstyledButtonCustom";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Navbar expand fixed="bottom" className="footer-navbar">
          <Stack spacing={2} direction="row">
            <NavLink to={"/about"}>
            {UnstyledButtonCustom("About Us")}
            </NavLink>
            <NavLink to={"/guidelines"}>
            {UnstyledButtonCustom("Community Guidlines")}
            </NavLink>
            <NavLink to={"/contact"}>
            {UnstyledButtonCustom("Contact")}
            </NavLink>
          </Stack>
        </Navbar>
      </footer>
    );
  }
}
