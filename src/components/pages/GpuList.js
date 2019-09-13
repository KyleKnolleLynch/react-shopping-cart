import React, { Fragment } from 'react';
import GpuItem from '../GpuItem';

const GpuList = () => {
  const db = [
    {
      series: '2080ti',
      name: 'Gigabyte Aorus',
      price: 799.99,
      id: 1
    },
    {
      series: '2080ti',
      name: 'Asus Stryx',
      price: 759.99,
      id: 2
    },
    {
      series: '2080ti',
      name: 'Zotac Extreme',
      price: 699.99,
      id: 3
    },
    {
      series: '2080ti',
      name: 'MSI Dragon',
      price: 810.99,
      id: 4
    }
  ];

  return (
    <Fragment>
      {db.map(item => (
        <GpuItem series={item.series} name={item.name} price={item.price} key={item.id} />
      ))}
    </Fragment>
  );
};

export default GpuList;
