import React from "react"
import Me from "./pictures/me.JPG";
import "./About.css"
const About=()=>{
    return (
        <div className="container1">
            <h2 className="title">Computer Science Student </h2>
            <img className="mepicture" src={Me}></img>
            <p>
                Hello My name is Jerry Zheng. I graduated from Kent State University in 2022 and my dream is to get a job in the Technology field,Whether it
                is making Web Applications or Making Software.Feel Free to visit my website and look at all my accomplishments as well as my interests, projects, and hobbies.Have Fun.
            </p>
        </div>
    )
}
export default About