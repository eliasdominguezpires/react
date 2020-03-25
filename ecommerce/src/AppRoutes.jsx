import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './view/Home';
import NotFound from './view/NotFound';
import Login from './view/Login';
import Galery from './view/Galery';
import About from './view/About';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const AppRoutes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/galery" component={Galery} />
      <Route component={NotFound} />
    </Switch>
  </main>
)

export default AppRoutes;
