import React from 'react';
import './LeftNavbar.css';
import { Link, NavLink } from "react-router-dom";

const LeftNavbar = () => {
  return (
    <div className="left-navbar">
      <div className="nav-item">
      <NavLink to="/" className='links'activeClassName="active">
        <img className="page-icon-1" src="/images/home.png" alt="Home Icon"/>
        Home
        <img className="next-button-1" src="/images/next.jpg" alt="Next Button"/>
        </NavLink>
      </div>
      
      <div className="nav-item">
        <img className="page-icon-1" src="/images/category.jpg" alt="Home Icon"/>
        <NavLink to="/category" className='links' activeClassName="active">Category</NavLink>
        <img className="next-button-1" src="/images/next.jpg" alt="Next Button"/>
      </div>

      <div className="nav-item">
        <img className="page-icon-1" src="/images/product.png" alt="Home Icon"/>
        <NavLink to="/product" className='links' activeClassName="active">Product</NavLink>
        <img className="next-button-1" src="/images/next.jpg" alt="Next Button"/>
      </div>
    </div>
  );
};

export default LeftNavbar;
