import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('Home');

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      
          <a
            href="/"
            className={activeLink === 'Home' ? 'active' : ''}
            onClick={() => handleSetActiveLink('Home')}
          >
            Home
          </a>
      
     
          <a
            href="/about"
            className={activeLink === 'About' ? 'active' : ''}
            onClick={() => handleSetActiveLink('About')}
          >
            About
          </a>
       <a>
          <img id="nav-logo"src="assets/Logo/WSCLogo.png" alt="" /> 
          </a>
        
          <a
            href="/league-table"
            className={activeLink === 'League Table' ? 'active' : ''}
            onClick={() => handleSetActiveLink('League Table')}
          >
          Table
          </a>
    

          <a
            href="/shop"
            className={activeLink === 'Shop' ? 'active' : ''}
            onClick={() => handleSetActiveLink('Shop')}
          >
            Shop
          </a>
     
    
    </nav>
  );
};

export default Navbar;
