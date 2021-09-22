import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { Shop } from '../pages/Shop';
import { Cart } from '../pages/Cart';

export function Routes() {
  return (
    <Switch>
      <Route path="/home" component={Home} exact />
      <Route path="/shop" component={Shop} />
      <Route path="/cart" component={Cart} />
      <Route path="/product" component={Product} />
    </Switch>
  );
}