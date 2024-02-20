import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="http://localhost:3000/images/digitalflake_logo.jpg" alt="Logo" className="logo" />
        <img className="logo-img-1" src="/images/Logout.jpg" alt="faq-img" />
      </div>
    </nav>
  );
};

export default Navbar;
