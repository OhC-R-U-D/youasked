import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

export default class Header extends Component {
    render() {

        console.log("logged in:", this.props.logged_in);
        console.log("current user:", this.props.current_user);
        console.log("sign up", this.props.new_user_route);
        console.log("sign in:", this.props.sign_in_route);
        console.log("sign out:", this.props.sign_out_route);
    
    
        return (
     <>
     <HomeIcon/>
     </>
        )
    }
}

