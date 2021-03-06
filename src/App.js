import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Signup from './pages/signup/index';
import Login from './pages/login/index.tsx';
import Dashboard from './pages/dashboard/index.tsx';
import Parent from './pages/signup/components/Parent';
import Child from './pages/signup/components/Child';
import Notice from './pages/signup/components/Notice';
import ParentForm from './pages/signup/components/ParentForm';
import Confirmation from './pages/signup/components/Confirmation';
import Confirmed from './pages/signup/components/Confirmed';
import ChildForm from './pages/signup/components/ChildForm';
import ChildForm1 from './pages/signup/components/ChildForm1';
import Created from './pages/signup/components/Created';

export default function HomePage() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/signup" component={Signup}></Route>
					<Route path="/login" component={Login}></Route>
					<Route path="/dashboard" component={Dashboard}></Route>
					<Route path="/child" component={Child}></Route>
					<Route path="/parent" component={Parent}></Route>
					<Route path="/notice" component={Notice}></Route>
					<Route path="/parent-form" component={ParentForm}></Route>
					<Route path="/confirmation" component={Confirmation}></Route>
					<Route path="/confirmed" component={Confirmed}></Route>
					<Route path="/child-form" component={ChildForm}></Route>
					<Route path="/child-form-01" component={ChildForm1}></Route>
					<Route path="/created" component={Created}></Route>
				</Switch>
			</div>
		</Router>
	);
}
