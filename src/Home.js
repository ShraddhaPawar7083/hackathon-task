import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import LeftNavbar from "./LeftNav";

function Home(){
    
    return(
        <div className="category-main">
            <LeftNavbar/>
        <div className="home-main">
            <div className="center-logo">
                <img src="http://localhost:3000/images/digitalflake_logo.jpg" alt="Logo" className="logo-1" />
                <h4>Welcome to Digitalflake Admin</h4>
            </div>
        </div>
        </div>
       
    )
}

export default Home;



