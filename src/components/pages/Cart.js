import React, { useContext } from 'react';
import CartContext from '../../context/cart/cartContext';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0).toFixed(2);

  return (
    <div className='card'>
      <h2>
        Your Cart <i className='p-1 fas fa-shopping-cart'></i>
      </h2>
      <h5>Items in Cart: {cart.length}</h5>
      <h5>Total Price: ${totalPrice}</h5>
    </div>
  );
};

export default Cart;
