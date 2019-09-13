import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartState from './context/cart/CartState';
import Navbar from './components/Navbar';
import Cart from './components/pages/Cart';
import GpuList from './components/pages/GpuList';
import Help from './components/pages/Help';
import './CSS/style.css';

const App = () => {
  return (
    <CartState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/' component={GpuList} />
              <Route exact path='/help' component={Help} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </CartState>
  );
};

export default App;
