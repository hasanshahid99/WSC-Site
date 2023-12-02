// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('Home');
  const [showMenu, setShowMenu] = useState(false);

  const handleSetActiveLink = (link: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveLink(link);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${showMenu ? 'show-menu' : ''}`}>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${showMenu ? 'show-dropdown' : ''}`}>
        <li>
          <Link
            to="/"
            className={activeLink === 'Home' ? 'active' : ''}
            onClick={(e) => handleSetActiveLink('Home', e)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className={activeLink === 'About' ? 'active' : ''}
            onClick={(e) => handleSetActiveLink('About', e)}
          >
            About
          </Link>
        </li>

        <li>
          <Link to="/">
            <img id="nav-logo" src="assets/Logo/WSCLogo.png" alt="" />
          </Link>
        </li>

        <li>
          <Link
            to="/league-table"
            className={activeLink === 'League Table' ? 'active' : ''}
            onClick={(e) => handleSetActiveLink('League Table', e)}
          >
            Table
          </Link>
        </li>

        <li>
          <Link
            to="/shop"
            className={activeLink === 'Shop' ? 'active' : ''}
            onClick={(e) => handleSetActiveLink('Shop', e)}
          >
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
