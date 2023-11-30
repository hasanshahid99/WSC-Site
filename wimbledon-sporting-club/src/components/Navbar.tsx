import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('Home');

  const handleSetActiveLink = (link: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <Link
        to="/"
        className={activeLink === 'Home' ? 'active' : ''}
        onClick={(e) => handleSetActiveLink('Home', e)}
      >
        Home
      </Link>

      <Link
        to="/about"
        className={activeLink === 'About' ? 'active' : ''}
        onClick={(e) => handleSetActiveLink('About', e)}
      >
        About
      </Link>

      <Link to="/">
        <img id="nav-logo" src="assets/Logo/WSCLogo.png" alt="" />
      </Link>

      <Link
        to="/league-table"
        className={activeLink === 'League Table' ? 'active' : ''}
        onClick={(e) => handleSetActiveLink('League Table', e)}
      >
        Table
      </Link>

      <Link
        to="/shop"
        className={activeLink === 'Shop' ? 'active' : ''}
        onClick={(e) => handleSetActiveLink('Shop', e)}
      >
        Shop
      </Link>
    </nav>
  );
};

export default Navbar;
