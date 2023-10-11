import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
       
        <Link to="/" className="logo">
          <img src="src/assets/Christiane Dragvik-logos_white.png" alt="Logo" />
        </Link>
        
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects">Projects</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

