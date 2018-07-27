import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import All from './pages/apartments/All'
import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import ApartmentContainer from './containers/apartments'
import AuthService from './services/AuthService'
import NewApartment from './pages/apartments/NewApartment'

// const Auth = new AuthService()

class App extends Component {
// 	constructor(props){
// 	 super()
// 	 this.state = {user: null}
//  }
//
//  	handleLogout(){ // <- Remove local storage, and redirect the user
// 		Auth.logout()
// 		this.props.history.replace('/login');
// }
// 	// componentWillMount(){
// 	 	const userId = Auth.getUserId()
// 	 	  Auth.fetch(`http://localhost:3000/users/${userId}`).then( res => {
// 		 this.setState({ user: res })
// 	 })
//  }

 render() {
	 return (
		 // <div className="App">
			//  <header className="App-header">
			// 	 <h1 className="App-title">Welcome to React</h1>
			//  </header>
			//  {this.state.user &&
			// 	 <div>
			// 		 <h2>Your Account</h2>
			// 		 <div>Name: {this.state.user.name}</div>
			// 		 <div>Email: {this.state.user.email}</div>
		 //
			// 		 <h3>Your Roles</h3>
			// 		 <ul>
			// 			 {this.state.user.roles.map( role => {
			// 				 return(
			// 					 <li key={role.name}>{role.name}</li>
			// 				 )
			// 			 })}
			// 		 </ul>
			// 	 </div>
			//  }
			//  <p className="App-intro">
			// 	 <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
			//  </p>
		 // </div>
			 <Router>
					<div>
						<Header />
						<Switch>
							<Route path="/apartments" component={ApartmentContainer} />
					    <Route path="/login" component={Login} />
					    <Route exact path="/" component={All}/>
						</Switch>
						<Footer />
					</div>
				</Router>
	 )
 }
}

export default App;
