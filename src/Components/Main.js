import React from 'react'
import profilephoto from '../assets/profilephoto.jpeg';
import "./css/main.css"
import NavBar from './NavBar';
import About from './About';

function Main(){
    return(
        <section>
            <div id='main'>
                <NavBar className="navbar" />
                <img className='child' id='propic' src={profilephoto} alt="A photo of me! :)"/>
                <About/>
            </div>
        </section>
        
    )
}

export default Main