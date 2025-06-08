import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <nav className='navbar'>
        <Link to='/' className="logo">
          <h1>
            <i className="fa-solid fa-hippo"></i>
            <span>Hippocart</span>
          </h1>
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to='/' onClick={() => setIsMenuOpen(false)}>
            <i className="fa-solid fa-house"></i>
            HOME
          </Link>
          
          <Link to='Cart' onClick={() => setIsMenuOpen(false)}>
            <i className="fa-solid fa-cart-shopping"></i>
            CART
            <span className="cart-count">{cart.length}</span>
          </Link>
          
          <Link to="Whishlist" onClick={() => setIsMenuOpen(false)}>
            <i className="fa-solid fa-heart"></i>
            WISHLIST
          </Link>
          
          <Link to='Log' onClick={() => setIsMenuOpen(false)}>
            <i className="fa-solid fa-user"></i>
            LOGIN
          </Link>

          <div className="cart-total">
            <span>Total: ${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
