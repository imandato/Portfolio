import React from 'react'
import "./css/footer.css"
import Mail from './assets/Mail.png'
import LinkedIn from './assets/LinkedIn.png'
import Github from './assets/Github.png'



function Footer(){

    return(
            <div id='footer'>
                <div id='icons'>
                    <a href='https://www.linkedin.com/in/ivelissemandato/'>
                        <img className='icon' id='linkedin' src={LinkedIn} alt="LinkedIn Icon"/>
                    </a>
                    <a href='https://github.com/imandato'>
                        <img className='icon' id='github' src={Github} alt="Github Icon"/>
                    </a>
                    <a href='mailto:imandato211@gmail.com'>
                        <img className='icon' id='email' src={Mail} alt="Mail Icon"/>
                    </a>
                </div>
                <div id='copyright'>Copyright © 2023 Ivelisse Mandato</div>
            </div>
    )
}

export default Footer