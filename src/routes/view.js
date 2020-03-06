import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'
import Register from '../components/Register'
import PublicHome from '../components/PublicHome'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/home' component={Home} />

          <Route exact path='/catalog' component={PublicHome} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Redirect from='/' to='/catalog' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
