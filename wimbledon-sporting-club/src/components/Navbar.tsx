// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('Home');
  const [showMenu, setShowMenu] = useState(false);

  const handleSetActiveLink = (link: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveLink(link);
    setShowMenu(!showMenu)
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
      <p id="mini-title">Wimbledon Sporting Club</p>
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

        <li id="hidden">
          <Link to="/">
            <img id="nav-logo" src="assets/Logo/WSCLogo.png" alt="logo" />
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
            to="/social"
            className={activeLink === 'Social' ? 'active' : ''}
            onClick={(e) => handleSetActiveLink('Social', e)}
          >
            Social
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
