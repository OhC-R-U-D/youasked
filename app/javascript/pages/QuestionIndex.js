import React, { Component } from 'react'

export default class QuestionIndex extends Component {
    render() {
        return (
            <div>
                This is the Question Index Page
                {this.props.questions &&
                this.props.questions.map(question => {
                    return(
                        <p>{question.post}</p>
                )})}

            </div>
        )
    }
}

