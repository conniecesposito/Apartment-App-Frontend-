import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../services/AuthService'
// import '../css/Header.css'

const Auth = new AuthService()

class Header extends Component {
    render() {
        return (
            <header>
                <div>APARTMENT LOGO</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/apartments">All Apartments</Link>
                        </li>
                        <li>
                            <Link to="/apartments/new">Create New Listing</Link>
                        </li>
                        {Auth.loggedIn()
                            ? <li onClick={this.handleLogout}>
                                <Link to="/">Logout</Link>
                            </li>
                            : <li>
                                <Link to="/login">Login</Link>
                            </li>
                        }
                    </ul>
                </nav>
            </header>
        )
    }

    handleLogout(){ // <- Remove local storage, and redirect the user
        Auth.logout()
    }
}

export default Header
