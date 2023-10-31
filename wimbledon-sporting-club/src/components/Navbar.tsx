import React from 'react';

import { NavLink } from 'react-router-dom';
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <div className='nav-first'>
          <li><NavLink to="/" className="active">Home</NavLink></li>
          <li><NavLink to="/fixtures" className="active">About</NavLink></li>
        </div>
        <div className="logo">WSC</div>
        <div className='nav-end'>
          <li><NavLink to="/team" className="active">League Table</NavLink></li>
          <li><NavLink to="/about" className="active">Shop</NavLink></li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
