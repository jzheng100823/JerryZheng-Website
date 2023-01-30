import React from "react"
import Kent from "./pictures/kentstate.jpg"
import Spartan from "./pictures/bhsspartan.jpg";
import K from "./pictures/Klogo.jpg";
import "./Education.css";

const Education=()=>{
    return(
        <div>
        <h1 className="heading">Education</h1>
        <div className="container">
        <img className="resize"src={Kent}></img>
        <img className="resize2" src={K}></img>
        <img className="resize3" src={Spartan}></img>
        </div>
        <p className="container">
            Welcome to I would like to share about some of my accommplishments and achievements in my academic career.
            Iam a fist generation college student in My Family. I attended Boardman High School in from 2016-2019.
            During my time there I ended up graduating with honors which was something I was proud of. After High School I attended 
            Kent State University where I decided to pursue Computer Science as my major. At that time I did not hav much prior experience 
            with coding but as I studied and attended the cs program it taught me alot about the theories and concepts of CS. I took classes 
            such as Algorithms, Design Patterns, Cryptography, Human Interface, and etc. I graduated from Kent State University in December of 2022
            and graduated with a 3.84 GPA and Magna Cum Laude.
        </p>
        </div>

    )
}
export default Education