import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Your one-stop shop for all your electronic needs. Quality products at competitive prices.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Cart">Cart</Link></li>
            <li><Link to="/Whishlist">Wishlist</Link></li>
            <li><Link to="/Log">Login</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><i className="fas fa-envelope"></i> support@example.com</li>
            <li><i className="fas fa-phone"></i> +1 234 567 890</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 Street, City, Country</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 