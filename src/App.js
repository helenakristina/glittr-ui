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

export default function HomePage() {
  return (
    <Router>
      <div>
           <div><Link to="/">Home</Link></div> 
           <div><Link to="/signup">Signup</Link></div>
           <div><Link to="/donate">Donate Now</Link></div>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/signup" component={Signup}>
          </Route>
          <Route path="/donate" component={Donate}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


