import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import All from '../pages/apartments/All'
import Show from '../pages/apartments/Show'
import Create from '../pages/apartments/Create'
import AuthService from '../services/AuthService'
import Login from '../components/Login'
import NewApartment from '../pages/apartments/NewApartment'

const Auth = new AuthService()

class ApartmentContainer extends Component {
    render() {
        /* url is going to be localhost:3001/apartments */
        const { url } = this.props.match

        return (
            <div>
                {Auth.loggedIn()
                    ? <Switch>
                        <Route exact path="/apartments/new" component={Create} />
                        <Route path="/apartments/NewApartments" component={NewApartment} />
                        <Route path={`${url}/:id`} component={Show} />
                        <Route path={`${url}/apartments/new`} component={NewApartment} />

                    </Switch>
                    : <Switch>
                        <Route exact path={"/apartments"} component={All} />
                        <Redirect from="/apartments/new" to="/Login"/>
                        <Redirect from={`${url}/:id`} to="/Login"/>
                    </Switch>
                }
            </div>
        )
    }
}

export default ApartmentContainer
