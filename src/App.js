import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import AllApartments from './pages/apartments/All'
import CreateApartment from './pages/apartments/Create'
import ShowApartment from './pages/apartments/Show'
import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import ApartmentContainer from './containers/apartments'

class App extends Component {
	render() {
		return (
			<Router>
			<div>
				<Header />
				<Switch>
					<Route path="/apartments" component={ApartmentContainer} />
			    <Route path="/login" component={Login} />
			    <Route exact path="/" component={ApartmentContainer}/>
				</Switch>
				<Footer />
			</div>
			</Router>
		);
	}
}

export default App;
