import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CoursePage.css";
import SideBar from "../../components/SideBar/SideBar";
import CourseList from "../../components/PublicLand/PublicLandList";

const CoursePage = () => {
    return ( 
        <div className="course-container">
            <div><SideBar/></div>
            <div><CourseList/></div>
        </div>
        
     );
}
 
export default CoursePage;