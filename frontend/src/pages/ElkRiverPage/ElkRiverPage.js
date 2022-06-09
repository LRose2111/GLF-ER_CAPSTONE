import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ElkRiverPage.css";
import SideBar from "../../components/SideBar/SideBar";
import ElkRiver from "../../components/ElkRiver/ElkRiver";


const ElkRiverPage = () => {
    return ( 
        <div className="course-container">
            <div><SideBar/></div>
            <div><ElkRiver/></div>
        </div>
        
     );
}
 
export default ElkRiverPage;