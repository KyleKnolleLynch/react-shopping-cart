import React, { Fragment } from 'react';
import CartState from './context/cart/CartState';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import GpuList from './components/GpuList';
import './CSS/style.css';

const App = () => {
  return (
    <CartState>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Cart />
          <GpuList />
        </div>
      </Fragment>
    </CartState>
  );
};

export default App;
