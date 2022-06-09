import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./GolfNews.css";
import SideBar from "../../components/SideBar/SideBar";
import NewsList from "../../components/NewsList/NewsList";

const GolfNews = () => {
    return (         
        <div className="courts-container">
            <div><SideBar/></div>
            <div><NewsList/></div>
        </div>
     );
}
 
export default GolfNews;