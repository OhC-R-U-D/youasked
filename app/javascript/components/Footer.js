import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NavItem, Nav } from "reactstrap";
import { Navbar } from "reactstrap";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


export default class Footer extends Component {
  render() {
    return (
      <footer>
      <Navbar expand fixed="bottom" className="footer-navbar">
        <Stack spacing={2} direction="row">
          <NavLink to={"/about"}>
            <Button variant="text">About Us</Button>
          </NavLink>
          <NavLink to={"/guidelines"}>
            <Button variant="text">Community Guidelines</Button>
          </NavLink>
          <NavLink to={"/contact"}>
            <Button variant="text">Contact</Button>
          </NavLink>
        </Stack>
      </Navbar>
    </footer>
    );
  }
}
