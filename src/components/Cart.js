import React, { useContext } from 'react';
import CartContext from '../context/cart/cartContext';

const Cart = () => {
  const value = useContext(CartContext);

  return (
    <div className='card'>
      <h2>
        Your Cart <i className='p-1 fas fa-shopping-cart'></i>
      </h2>
      <h5>Items in Cart: 0</h5>
      <h5>Total Price: $0</h5>
      <span>{value}</span>
    </div>
  );
};

export default Cart;
