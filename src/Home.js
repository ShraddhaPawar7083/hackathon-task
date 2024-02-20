import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

function Home(){
    
    return(
        <div className="home-main">
            <Navbar />
            <div className="center-logo">
                <img src="http://localhost:3000/images/digitalflake_logo.jpg" alt="Logo" className="logo-1" />
                <h4>Welcome to Digitalflake Admin</h4>
            </div>
            <div class="pages">
                 <div class="page">
                     <img class="page-icon" src="/images/home.png" alt="Home Icon"/>
                     <h4>Home</h4>
                    <img class="next-button" src="/images/next.jpg" alt="Next Button"/>
                </div>
            <div class="page">
                    <img class="page-icon" src="/images/category.jpg" alt="Category Icon"/>
                    <h4>Category</h4>
                    <img class="next-button" src="/images/next.jpg" alt="Next Button"/>
                 </div>
                 <div class="page">
                    <img class="page-icon" src="/images/product.png" alt="Products Icon"/>
                    <h4>Products</h4>
                    <img class="next-button" src="/images/next.jpg" alt="Next Button"/>
                 </div>
            </div>
        </div>
       
    )
}

export default Home;



 // <div className="home-main">
        //     <div className="home-main-1">
        //         <div className="nav-1">
        //         <img className="digi-img" src="https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png " alt="faq-img" />
        //         <img className="logo-img-1" src="/images/Logout.jpg" alt="faq-img" />
        //     </div>
        //     <div className="flacke-img">
        //     <img src="https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png" alt="Main Image" />
        //     <h4>Welcome to Digitalflacke Admin</h4>
        //     </div>
        //     <div class="pages">
        //         <div class="page">
        //             <img class="page-icon" src="/images/home.png" alt="Home Icon"/>
        //             <h4>Home</h4>
        //             <img class="next-button" src="/images/next.jpg" alt="Next Button"/>
        //         </div>
        //         <div class="page">
        //             <img class="page-icon" src="/images/category.jpg" alt="Category Icon"/>
        //             <h4>Category</h4>
        //             <img class="next-button" src="/images/next.jpg" alt="Next Button"/>
        //         </div>
        //         <div class="page">
        //             <img class="page-icon" src="/images/product.png" alt="Products Icon"/>
        //             <h4>Products</h4>
        //             <img class="next-button" src="/images/next.jpg" alt="Next Button"/>
        //         </div>
        //     </div>
        //     </div>
        // </div>