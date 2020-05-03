import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/home/index'
import Signup from './pages/signup/index'
import Donate from './pages/donate/index'
import Login from './pages/login/index.tsx'
import Dashboard from './pages/dashboard/index.tsx'

export default function HomePage() {
  return (
    <Router>
      <div>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/signup">Signup</Link></div>
        <div><Link to="/donate">Donate Now</Link></div>
        <div><Link to="/login">Login</Link></div>
        <div><Link to="/dashboard">Dashboard</Link></div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/donate" component={Donate}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  );
}