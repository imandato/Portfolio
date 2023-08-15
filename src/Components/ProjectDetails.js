import React from 'react'
import "./css/projectdetails.css"


function ProjectDetails(){
    return(
        <div id='project-details'>
            <div class="modal" id="modal"> 
                <div class="modal-content">
                    <img id='project-image'></img>
                    <div id="authors"></div>
                    <div id='description'></div>
                    <span class="close-button">&times;</span>
            </div>
        </div>
        </div>
    )
}

export default ProjectDetails