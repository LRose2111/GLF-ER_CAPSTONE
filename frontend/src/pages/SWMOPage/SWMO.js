import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import SWMO from "../../components/SWMOHunting/SWMO";


const SWMOPage = () => {
    return ( 
        <div className="course-container">
            <div><SideBar/></div>
            <div><SWMO/></div>
        </div>
        
     );
}
 
export default SWMOPage;