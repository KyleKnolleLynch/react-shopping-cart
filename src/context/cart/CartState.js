import React, { useState } from 'react';
import CartContext from './cartContext';

const CartState = props => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
