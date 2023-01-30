import React from "react"
import Github from "./pictures/github.png";
import "./Projects.css";
const Projects=()=>{
    return(
        <div>
        <h1 className="title">My Project Portfolio</h1>
        <text className="textcolor">Welcome to my Portfolio Page Below is the link to my Github Portfolio where you can see all the code for my projects</text>
        <div className="image">
        <a href="https://github.com/jzheng100823?tab=repositories"><img src={Github}></img></a>
        </div>
        </div>
    )
}
export default Projects