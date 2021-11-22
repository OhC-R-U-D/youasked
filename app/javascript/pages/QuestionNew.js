import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import formpic from "../assets/questionform.jpeg";



export default class QuestionNew extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
             question: "",
             url: ""   
            },
            submitted: false
        }
    }
    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
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
                        required
                        id="outlined-required"
                        label="Optional"
                        defaultValue="URL"
                        onChange={this.handleChange}
                        value={this.state.form.url} 
                        />
                        <br />
                    <TextField fullWidth sx={{ m: 1 }}
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="SPILL YOUR GUTS HERE"
                        onChange={this.handleChange}
                        value={this.state.form.question}
                        />
                         <br />
                        <Button 
                        size="medium" 
                        onClick={this.handleSubmit}>Submit</Button>
                        {this.state.submitted && <Redirect to="/protectedindex" />}
                   </div> 
            </Box>

        )
    }
}

