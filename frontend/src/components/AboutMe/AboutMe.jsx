import React from "react";
import "./AboutMe.css";
import {BsGithub} from "react-icons/bs";

const AboutMe = () => {
    return ( 
        <div className="entire-contain-ab">
            <div className="about-title"><h3 className="">About Me</h3></div>
            <div className="about-me-contain">
                <div>
                <div><img src ="/images/about-cropped.jpg" className = "about-me-pic" alt = "fam"/>  </div>
                    <div className="small-icon-imgs">
                        <div className="github"><a href="https://github.com/Lrose2111" target="_blank"><BsGithub size={30}/></a></div>
                    </div>
                </div>
                <div className="about-first-para">I'm <b>Lakota Rose</b> a husband, advid waterfowl hunter, and Marine Corps veteran. I'm currently a 
                    devCodeCamp Full Stack Development student recently immersed with my Capstone (this site). I enjoyed the process of problem solving and coding during this bootcamp, and being able to demonstrate the skills I learned with this project.
                      
                </div>
            </div>
        </div>

    
    );
}
 
export default AboutMe;