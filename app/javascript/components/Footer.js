import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem, Nav } from 'reactstrap'
import { Navbar } from "reactstrap";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Navbar>
                    <Stack spacing={2} direction="row">
                        <NavLink to={"/about"}>
                            <Button varient="text">About Us</Button>
                        </NavLink>
                            <NavLink to={"/guidlines"}>
                                <Button varient="text">Community Guidelines</Button>
                            </NavLink>
                                <NavLink to={"/contact"}>
                                    <Button varient="text">Contact</Button>
                                </NavLink>
                    </Stack>
                </Navbar>
            </footer>
        )
    }
}

