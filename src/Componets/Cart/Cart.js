import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, removetocart } from '../Store/Cartslice';
import "./Cart.css"
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemove = (itemId) => {
        dispatch(removetocart(itemId));
    }

    const handleBackToHome = () => {
        navigate('/');
    }

    const handleIncrement = (itemId) => {
        dispatch(increment(itemId));
    }

    const handleDecrement = (itemId) => {
        dispatch(decrement(itemId));
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    return (
        <div className='cart-container'>
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <h1>Your Cart is Empty <i className="fa-solid fa-cart-shopping"></i></h1>
                    <img src="https://i1.wp.com/www.huratips.com/wp-content/uploads/2019/04/empty-cart.png?fit=603%2C288&ssl=1" alt="Empty Cart" />
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className='cart-item' key={item.id}>
                                <div className="item-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="item-details">
                                    <h3 className="item-title">{item.title}</h3>
                                    <p className="item-category">Category: {item.category}</p>
                                    <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
                                    <div className="quantity-controls">
                                        <button onClick={() => handleDecrement(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleIncrement(item.id)}>+</button>
                                    </div>
                                    <button 
                                        className="remove-btn"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        Remove <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h2>Cart Summary</h2>
                        <div className="total-amount">
                            Total: ${calculateTotal().toFixed(2)}
                        </div>
                    </div>
                </>
            )}
            <button onClick={handleBackToHome} className="back-to-home-btn">
                <i className="fas fa-arrow-left"></i> Back to Home
            </button>
        </div>
    )
}

export default Cart;
