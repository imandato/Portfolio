import React from 'react'
import "./css/about.css"
import data from '../assets/data.json';


function About(){
    return(
            <div id='about'>
                <header id='aboutheader'>About Me</header>
                <div id='description'>
                    {data.about.description}
                </div>
            </div>
    )
}

export default About