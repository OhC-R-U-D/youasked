import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import formpic from "../assets/questionform.jpeg";
import { Redirect } from "react-router-dom";



export default class QuestionNew extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
             question: "",
             url: "",
             user_id: this.props.current_user
            },
            submitted: false
        }
    }
    handleChange = (name, e) => {
        let { form } = this.state
        form[name] = e.target.value
        console.log(form)
        console.log(name)
        this.setState({form: form})
    }
    handleSubmit = () => {
        this.props.createNewQuestion(this.state.form)
        this.setState({submitted: true})
      }
    render() {
        return (
            <Box id="form"
            component="form"
            sx={{ '&.MuiTextFeild-root': { m: 1, width: '25ch' },}}
            noValidateautoComplete="off">
               <div>
               <img src={formpic} alt="formpic" className="formpic"/>
               <br />
               <br />
               <TextField 
                        id="outlined-required"
                        label="URL"
                        onChange={(e)=>{
                            console.log(e)
                            this.handleChange("url", e)}}
                        value={this.state.form.url} 
                        />
                        <br />
                    <TextField fullWidth sx={{ m: 1 }}
                        id="question-box"
                        label="SPILL YOUR GUTS HERE"
                        onChange={(e)=>this.handleChange("question", e)}
                        value={this.state.form.question}
                        />
                         <br />
                        <Button 
                        size="medium" 
                        onClick={this.handleSubmit}>Submit</Button>
                        {this.state.submitted && <Redirect to="/questionindex" />}
                   </div> 
            </Box>

        )
    }
}

