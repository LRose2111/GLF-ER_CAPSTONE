import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import MWM from "../../components/MissouriWaterfowlMarsh/MWM";


const MWMPage = () => {
    return ( 
        <div className="course-container">
            <div><SideBar/></div>
            <div><MWM/></div>
        </div>
        
     );
}
 
export default MWMPage;