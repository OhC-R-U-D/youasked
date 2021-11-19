import React, { Component } from 'react'

export default class QuestionIndex extends Component {
    render() {
        console.log("current user:", this.props.user)
        return (
            <div>
                This is the Question Index Page
                {this.props.questions &&
                this.props.questions.map(question => {
                    return(
                        <div key={question.id}>
                            <p>{this.props.user.alias}</p>
                            <p>{question.post}</p>
                            <img src={question.img_url}/>
                        </div>
                )})}

            </div>
        )
    }
}

