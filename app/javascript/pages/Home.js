import React, { Component } from 'react'
import landingpage from '../assets/landingpage.jpg'
import landingmedia from '../assets/landingmedia.gif'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                <h1 id="landing">YOU ASKED..</h1>
                </div>
                <div>
                <img src={landingmedia} alt="landingmedia" className="landingmedia"/>
                </div>
                <div>
                <img src={landingpage} alt="landingpage" className="landingpage"/>
                </div>
                <p>Sometimes life isn’t black and white and we’re faced with questions,	but let’s keep it light!
                Post your questions if you have one now…	but responses may be below the brow.</p>

            </div>

        )
    }
}

