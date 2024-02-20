import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar-2">
      <div className="navbar-logo-2">
        <div className='nav-2'>
        <img src="http://localhost:3000/images/digitalflake_logo.jpg" alt="Logo" className="logo" />
        <h3>digitalflake</h3>
        </div>
        <img className="logo-img-2" src="/images/icons.png" alt="faq-img" />
      </div>
    </nav>
  );
};

export default Navbar;
