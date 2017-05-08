import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect} from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import {logout} from '../actions/login'

class Nav extends Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
  }

  logout() {
    const {dispatch, logout} = this.props

    dispatch(logout())
  }

  render() {
    const {isAuthenticated} = this.props

    if(!isAuthenticated) {
      return null
    }

    return (
      <div className="ui attached stackable menu">
        <Container>
          <Link to="/" className="active item">Home Page</Link>
          <div className="right menu">
            <a className="ui item" onClick={this.logout.bind(this)}>
              Logout
            </a>
          </div>
        </Container>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    logout
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
