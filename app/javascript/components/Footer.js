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
              <Button size="medium" variant="contained">
                About Us
              </Button>
            </NavLink>
            <NavLink to={"/guidelines"}>
              <Button size="medium" variant="contained">
                Community Guidelines
              </Button>
            </NavLink>
            <NavLink to={"/contact"}>
              <Button size="medium" variant="contained">
                Contact
              </Button>
            </NavLink>
          </Stack>
        </Navbar>
      </footer>
    );
  }
}
