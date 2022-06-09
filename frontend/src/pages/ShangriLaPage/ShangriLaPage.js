import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ShangriLaPage.css";
import SideBar from "../../components/SideBar/SideBar";
import ShangriLa from "../../components/ShangriLa/ShangriLa";


const ShangriLaPage = () => {
    return ( 
        <div className="course-container">
            <div><SideBar/></div>
            <div><ShangriLa/></div>
        </div>
        
     );
}
 
export default ShangriLaPage;