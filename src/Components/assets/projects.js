import plantfact from './plantfact.png'
import chef from './chef.png'
import sudoku from './sudoku.png'
import laugh from './laugh.png'

const projects = [
    {
        "id":"api",
        "title": "PlantFact API",
        "developers": "Ivelisse Mandato",
        "image": plantfact,
        "tags":["Internship", "Relational API"],
        "tools":["C#", ".NetCore","Microsoft SQL","Docker", "UTM"],
        "date":"August 2023",
        "path": "https://github.com/imandato/PlantFactsAPI",
        "description": "RESTful API that stores plant facts and their grow zones in a relational database on MS SQL Server"
    }, 
    {
        "id":"laughfactory",
        "title": "Laugh Factory",
        "developers": "Ivelisse Mandato, Anibal Hugo, Yekai",
        "image": laugh,
        "tags":["Course Project", "Web App"],
        "tools":["Python3", "Flask","SASS","Bootstrap", "SQL", "Render"],
        "date":"January 2023",
        "path": "https://github.com/chosenbyme/laugh_factory_app",
        "description": "Full-Stack meme sharing web application that allowes users to log-in and share memes from their acccounts to a public meme page"
    }, 
    {
        "id":"chef",
        "title": "What the Chef",
        "developers": "Ivelisse Mandato, Yulia Rosenthal, Dallas Pallumbo, Yekai",
        "image": chef,
        "tags":["Course Project", "Web App"],
        "tools":["ReactJS", "CSS3","Bootstrap", "Heroku", "SQL"],
        "date":"November 2022",
        "path": "https://github.com/imandato/Milestone-2-Recipe-Project-Front",
        "description": "Full-stack recipe web application that stores your favorite recipes and allows you to look up new ones"
        },              
    {
        "id":"sudoku",
        "title": "Sudoku Game",
        "developers": "Ivelisse Mandato",
        "image": sudoku,
        "tags":["Course Project", " Game"],
        "tools":["HTML5", "CSS3", "SASS", "JavaScript", "GitHub Pages"],
        "date":"July 2022",
        "path": "https://github.com/imandato/Milestone-Project-Sudoku",
        "description": "Frontend game application containing multiple levels (easy, medium, hard) of sudoku"
    } 
];

export default projects;
    
