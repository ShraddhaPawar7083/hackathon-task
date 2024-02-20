// LeftNavbar.js

import React from 'react';
import './LeftNavbar.css';

const LeftNavbar = () => {
  return (
    <div className="left-navbar">
      <div className="nav-item">
        <img className="page-icon-1" src="/images/home.png" alt="Home Icon"/>
        <a href="#">Home</a>
        <img className="next-button-1" src="/images/next.jpg" alt="Next Button"/>
      </div>
      
      <div className="nav-item">
        <img className="page-icon-1" src="/images/category.jpg" alt="Home Icon"/>
        <a href="#">Category</a>
        <img className="next-button-1" src="/images/next.jpg" alt="Next Button"/>
      </div>

      <div className="nav-item">
        <img className="page-icon-1" src="/images/product.png" alt="Home Icon"/>
        <a href="#">Product</a>
        <img className="next-button-1" src="/images/next.jpg" alt="Next Button"/>
      </div>
    </div>
  );
};

export default LeftNavbar;
