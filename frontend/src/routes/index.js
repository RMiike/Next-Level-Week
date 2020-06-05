import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Home from '../pages/home'
import Create from '../pages/create'
import Search from '../pages/search'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/create' component={Create} />
      <Route path='/search' component={Search} />
    </Switch>
  );
};

export default Routes;