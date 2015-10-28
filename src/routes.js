import React from 'react';
import {Route} from 'react-router';
import {
    App,
    Home,
    Widgets,
    About,
    NotFound,
  } from 'containers';

export default (store) => {
  return (
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="/widgets" component={Widgets}/>
      <Route path="/about" component={About}/>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
