import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import Whitetail from "../../components/WhitetailHuntingLand/WhitetailHunt";


const WTPage = () => {
    return ( 
        <div className="course-container">
            <div><SideBar/></div>
            <div><Whitetail/></div>
        </div>
        
     );
}
 
export default WTPage;