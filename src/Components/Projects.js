import "./css/projects.css"
import Card from 'react-bootstrap/Card';
import photo from './assets/photo.png'
import projects from './assets/projects.js';
import smallgit from './assets/smallgit.png';

function Projects(){

    // const imageLoop = () =>(
    //     for(var=i)
    // );

    return(
        <div id='projects'>
            <header>My Projects</header>
            <div className='item-container'>
            {projects.map((project) => (

                <Card className='project-card'>
                <Card.Body className="card">
                    <Card.Img className="project-image" src={`${project.image}`} alt='test' />    
                    <Card.Text className="project-title" style={{ margin:0, fontWeight: "bold"}} variant="body2" color="text.secondary">{`${project.title}`}</Card.Text>
                    <div className="tags-container">
                    <Card.Text className="project-type project-type1" >{`${project.tags[0]}`}</Card.Text>
                    <Card.Text className="project-type project-type2" >{`${project.tags[1]}`}</Card.Text>
                    </div>

                    <div className="tools-container">
                        <Card.Text className="project-tools">{`${project.tools[0]}`}</Card.Text>
                        <Card.Text className="project-tools">{`${project.tools[1]}`}</Card.Text>
                        <Card.Text className="project-tools">{`${project.tools[2]}`}</Card.Text>
                        <Card.Text className="project-tools">{`${project.tools[3]}`}</Card.Text>
                        <Card.Text className="project-tools">{`${project.tools[4]}`}</Card.Text>
                        <Card.Text className="project-tools" hidden={(project.tools[5] === "") ? true : true} >{`${project.tools[5]}`}</Card.Text>
                    </div>
                    <Card.Text className="project-description">{`${project.description}`}</Card.Text>
                    <Card.Text className="project-date">{`${project.date}`}</Card.Text>
                    <a href={`${project.path}`}>
                    <Card.Img className="git" src={smallgit} alt="github icon" />
                    </a>
                    
                </Card.Body>
                </Card>
             ))}   
        </div>
        </div>
    )
}

export default Projects