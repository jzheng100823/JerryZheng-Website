import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
const Navbar=()=>{
    return <nav className="nav">
        <Link to="/" className="nav-title">Jerry Zheng</Link>
        <ul>
            <Link to="/Home"><img src=""></img></Link>
            <li>
                <Link to="/About">About Me</Link>
            </li>
            <li>
                <Link to="/Projects">Projects</Link>
            </li>
            <li>
                <Link to="/Education">Education</Link>
            </li>
            <li>
                <Link to="/Resume">Resume</Link>
            </li>
            
        </ul>
        </nav>
}
export default Navbar