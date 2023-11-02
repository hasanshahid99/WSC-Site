import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('Home');

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a
            href="/"
            className={activeLink === 'Home' ? 'active' : ''}
            onClick={() => handleSetActiveLink('Home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={activeLink === 'About' ? 'active' : ''}
            onClick={() => handleSetActiveLink('About')}
          >
            About
          </a>
        </li>
        <div className='logo'>
          {/* <img id="nav-logo"src="assets/Logo/WSCLogo.png" alt="" /> */}
          </div>
        <li>
          <a
            href="/league-table"
            className={activeLink === 'League Table' ? 'active' : ''}
            onClick={() => handleSetActiveLink('League Table')}
          >
          Table
          </a>
        </li>
        <li>
          <a
            href="/shop"
            className={activeLink === 'Shop' ? 'active' : ''}
            onClick={() => handleSetActiveLink('Shop')}
          >
            Shop
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
