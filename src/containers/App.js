import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cssModules from 'react-css-modules'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { Container } from 'semantic-ui-react'
import styles from '../style/index.scss'
import _ from 'lodash'

@cssModules(styles)

class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    styles: PropTypes.object,
    isAuthenticated: PropTypes.bool.isRequired
  }

  render() {
    const { children, styles, isAuthenticated} = this.props

    return (
      <div>
        <Header>
          <Nav isAuthenticated={isAuthenticated}/>
        </Header>
        <Container>
          {children}
        </Container>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const mapStateToProps = (state) => {

  return {
    isAuthenticated: state.login.isAuthenticated
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
