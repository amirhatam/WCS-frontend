import React from 'react'
import '../assets/styles/Wave.css'
import Fade from 'react-reveal/Fade';

export default function AnimationBG() {
    return (
        <div>
            <div className='argo-container'>
                <Fade left duration={10000}>
                    <div className='argo-BG '>
                    </div>
                </Fade>
            </div>

            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </div>
    )
}
