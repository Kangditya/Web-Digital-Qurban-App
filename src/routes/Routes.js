import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../Components/HomePage/HomePage';
import NotFound from '../Components/notFound/NotFound';
import LiveStock from '../Components/LiveStock/LiveStock';
import CartPage from '../Components/CartPage/CartPage';

//penggunaan router
function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/cart' component={CartPage} />
        <Route path='/livestocks/:id' component={LiveStock} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
