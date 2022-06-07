import React from "react";
import "./aboutUs.css";
import {BsGithub} from "react-icons/bs";

const AboutMe = () => {
    return ( 
        <div className="entire-contain-ab">
            <div className="about-title"><h3 className="">About Me</h3></div>
            <div className="about-me-contain">
                <div>
                    <div className="small-icon-imgs">
                        <div className="github"><a href="https://github.com/Lrose2111" target="_blank"><BsGithub size={30}/></a></div>
                    </div>
                </div>
                <div className="about-first-para">I'm <b>Lakota Rose</b> a husband, advid waterfowl hunter, bogey golfer, and Marine Corps veteran. I'm currently a 
                    devCodeCamp Full Stack Development student recently immersed with my Capstone (this site). I enjoyed the process of problem solving and coding during this bootcamp, and being able to demonstrate the skills I learned with this project.
                      
                </div>
            </div>
        </div>

    
    );
}
 
export default AboutMe;