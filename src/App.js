import React from "react"
import './App.css';
import Home from './Pages/Home';

import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import About from "./Pages/About";
import Navbar from "./Pages/Navbar";
import Resume from "./Pages/Resume";
import { Route,Routes } from "react-router-dom";

import { Link } from "react-router-dom";


function App(){

  return (
    <div className="App">
      <div className="main">
        <Navbar/>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/Education" element={<Education/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Resume" element={<Resume/>}/>
          </Routes>
        </div>
        </div>
      </div>
  );
};

export default App;
