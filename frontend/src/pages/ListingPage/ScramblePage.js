import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ScramblePage.css";
import SideBar from "../../components/SideBar/SideBar";
import PrivateLand from "../../components/PrivateLand/Scrambles";


const ScramblePage = () => {
    return (         
        <div className="course-container">
            <div><SideBar/></div>
            <div><PrivateLand/></div>
        </div>
     );
}
 
export default ScramblePage;