import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <header className='header'>
      <nav className='navbar'>
        <Link to='/'><h1>
          <i className="fa-solid fa-hippo"></i>
          <span>Hippocart</span>
        </h1></Link>
        
        <Link to='/'>HOME</Link>
        
        <div>
          <Link to='Cart'>
            CART <i className="fa-solid fa-cart-shopping"></i> {cart.length}
          </Link>
          <span>(${subtotal.toFixed(2)})</span>
        </div>
        
        <Link to="Whishlist">
          <i className="fa-solid fa-heart"></i> WISHLIST
        </Link>
        
        <Link to='Log'>
          <i className="fa-solid fa-user"></i>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar;
