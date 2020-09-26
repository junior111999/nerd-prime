import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import  from '../pages/';
import Movie from '../pages/Movies';

const Routes: React.FC = () => (
  <Switch>
    {/* <Route path="/" exact component={} /> */}
    <Route path="/Movie" component={Movie} />
  </Switch>
);

export default Routes;
