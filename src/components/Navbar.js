import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/cart/cartContext';

const Navbar = () => {
  const [cart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0).toFixed(2);


  return (
    <div className='navbar bg-dark'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">View Cart <i className="fas fa-cart-arrow-down"></i></Link><span><h6>Items: {cart.length} Total: ${totalPrice}</h6></span></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
