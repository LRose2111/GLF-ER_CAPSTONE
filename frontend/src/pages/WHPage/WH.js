import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import WHP from "../../components/WaterfowlHuntingProperty/WaterFowlHunting";


const WHPage = () => {
    return ( 
        <div className="course-container">
            <div><SideBar/></div>
            <div><WHP/></div>
        </div>
        
     );
}
 
export default WHPage;