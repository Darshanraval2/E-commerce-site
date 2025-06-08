import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <h1>
          <i className="fas fa-shopping-cart"></i>
          <span>HippoCart</span>
        </h1>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/">
            <i className="fas fa-home"></i>
            Home
          </a>
          <a href="/products">
            <i className="fas fa-box"></i>
            Products
          </a>
          <a href="/cart">
            <i className="fas fa-shopping-cart"></i>
            Cart
            <span>0</span>
          </a>
          <a href="/account">
            <i className="fas fa-user"></i>
            Account
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 