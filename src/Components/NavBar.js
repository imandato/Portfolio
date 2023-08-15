import React from 'react'
import { Link } from 'react-scroll';
import "./css/navbar.css";


function NavBar(){
    return(
        <div id='navbar'>
            <div>
                <ul>
                    <Link id='li' to="main" spy={true} smooth={true} duration={500} >Home</Link>
                    <Link id='li' to="about" spy={true} smooth={true} duration={500}>About</Link>
                    <Link id='li' to="projects" spy={true} smooth={true} duration={500}>My Projects</Link>
                    <Link id='li' to="footer" spy={true} smooth={true} duration={500}>Contact Me</Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar