import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Movie from '../pages/Movie/index';

const Routes: React.FC = () => (
  <Switch>
    {/* <Route path="/" exact component={} /> */}
    <Route path="/Movie" component={Movie} />
  </Switch>
);

export default Routes;
