// About.js

import React from "react";

import NavBar from "../components/Navbar.js";
import AboutContent from "./aboutContent.js"


const About = (props) => {

    return (
        <div className="parent">
            <NavBar />        
            <AboutContent/>
        </div>              
    );
}

export default About;
