import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import Signup from './pages/signup/index';
import Login from './pages/login/index.tsx';
import Dashboard from './pages/dashboard/index.tsx';

export default function HomePage() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/signup" component={Signup}></Route>
					<Route path="/login" component={Login}></Route>
					<Route path="/dashboard" component={Dashboard}></Route>
				</Switch>
			</div>
		</Router>
	);
}
