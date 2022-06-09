import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PatriciaIslandPage.css";
import SideBar from "../../components/SideBar/SideBar";
import PatricaIsland from "../../components/PatricaIsland/PatricaIsland";


const PatricaIslandPage = () => {
    return ( 
        <div className="course-container">
            <div><SideBar/></div>
            <div><PatricaIsland/></div>
        </div>
        
     );
}
 
export default PatricaIslandPage;