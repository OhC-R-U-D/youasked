import React, { Component } from 'react'
import patrick from '../assets/patrick.jpg'

export default class Page extends Component {
    render() {
        return (
            <div>
             <img src={patrick} alt="patrick" className="patrick"/>
            </div>
        )
    }
}

