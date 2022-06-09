import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ScramblePage.css";
import SideBar from "../../components/SideBar/SideBar";
import ScramblesList from "../../components/ScramblesList/ScramblesList";


const ScramblePage = () => {
    return (         
        <div className="course-container">
            <div><SideBar/></div>
            <div><ScramblesList/></div>
        </div>
     );
}
 
export default ScramblePage;