import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./NeoshoPage.css";
import SideBar from "../../components/SideBar/SideBar";
import Neosho from "../../components/Neosho/Neosho";


const NeoshoPage = () => {
    return ( 
        <div className="course-container">
            <div><SideBar/></div>
            <div><Neosho/></div>
        </div>
        
     );
}
 
export default NeoshoPage;