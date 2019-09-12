import React from 'react';

const GpuItem = props => {
  const addToCart = () => {
    // add function
  };

  return (
    <div className='card p-1 bg-light grid-2'>
      <div className='list'>
        <h2 className='text-primary'>{props.name}</h2>
        <h3>{props.series}</h3>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti
          id consequuntur perspiciatis fuga laborum.
        </h5>
        <h3>{props.price}</h3>
        <button className='btn btn-dark btn:hover p my' onClick={addToCart}>
          Add To Cart
        </button>
      </div>
      <img src="" alt="item-img" className="img"></img>
    </div>
  );
};

export default GpuItem;
