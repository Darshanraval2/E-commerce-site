import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWish } from '../Store/Whishslice';
import { addtocart } from '../Store/Cartslice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './Whishlist.css';

const Whishlist = () => {
  const wishlistItems = useSelector((state) => state.whish);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (item) => {
    dispatch(removeFromWish(item));
    toast.error('Removed from wishlist');
  };

  const handleAddToCart = (item) => {
    const exist = cartItems.find((cartItem) => cartItem.id === item.id);
    if (!exist) {
      dispatch(addtocart(item));
      toast.success('Added to cart');
    } else {
      toast.info('Item already in cart');
    }
  };

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h2>My Wishlist</h2>
        <Link to="/" className="back-to-home">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>
      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <p>Your wishlist is empty</p>
        </div>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p className="price">${item.price}</p>
                <p className="description">{item.description}</p>
              </div>
              <div className="item-actions">
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFromWishlist(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Whishlist;
