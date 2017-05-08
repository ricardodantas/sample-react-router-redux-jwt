import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import {login} from '../actions/login'
import { Dimmer, Loader, Header } from 'semantic-ui-react'

class LoginPage extends Component {

  static propTypes = {
    login: PropTypes.func.isRequired,
    requestLogin: PropTypes.object.isRequired,
  }

  static defaultProps = {
    requestLogin: {}
  }

  state = {
    email: '',
    password: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = e => {
    e.preventDefault()

    const {dispatch, login } = this.props
    const { email, password } = this.state

    dispatch(login(email, password))
  }

  render() {
    const {requestLogin, location} = this.props
    const {isAuthenticated} = requestLogin

    if(isAuthenticated) {
      return <Redirect to="/"/>
    }

    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Header.Content>
            i2x Challenge Frontend
          </Header.Content>
        </Header>
        <LoginForm response={requestLogin} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Dimmer active={requestLogin.isFetching}>
          <Loader size="massive" active={requestLogin.isFetching}/>
        </Dimmer>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login,
    dispatch
  }
}

const mapStateToProps = (state) => {
  return {
    requestLogin: state.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
