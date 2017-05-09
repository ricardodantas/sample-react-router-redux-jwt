import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from '../containers/LoginPage'
import HomePage from '../containers/HomePage'
import NotFoundPage from '../containers/NotFoundPage'
import PrivateRoute from './PrivateRoute'

export default (
  <Router>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/" component={HomePage}/>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>
)
