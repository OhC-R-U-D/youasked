import React, { Component } from 'react';
import { NavLink, } from "react-router-dom";
import Button from "@mui/material/Button";

export default class ProtectedIndex extends Component {
    render() {
        return (
            <div>
                This is the Protected Index
                <NavLink to={"/questionnew"}>
              <Button variant="text">ADD QUESTION</Button>
            </NavLink>
            </div>
        )
    }
}

