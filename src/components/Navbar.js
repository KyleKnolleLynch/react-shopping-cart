import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar bg-dark'>
      <ul>
        <li><a href='!#'>Home</a></li>
        <li><a href='!#'>View Cart <i className="fas fa-cart-arrow-down"></i></a></li>
        <li><a href='!#'>Help</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
