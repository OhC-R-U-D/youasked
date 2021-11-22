import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import formpic from "../assets/questionform.jpeg";

export default class QuestionNew extends Component {
    render() {
        return (
            <Box id="form"
            component="form"
            sx={{ '&.MuiTextFeild-root': { m: 1, width: '25ch' },}}
            noValidateautoComplete="off">
               <div>
               <TextField 
                        required
                        id="outlined-required"
                        label="Optional"
                        defaultValue="URL"
                        />
                        <br />
                    <TextField fullWidth sx={{ m: 1 }}
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="SPILL YOUR GUTS HERE"
                        />
                         <br />
                        <Button size="medium">Submit</Button>
                   </div> 
            </Box>

        )
    }
}

