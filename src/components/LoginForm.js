import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import cssModules from 'react-css-modules'
// import styles from '../style/counter.scss'
import { Button, Form, Input, Container, Message } from 'semantic-ui-react'
import _ from 'lodash'

// @cssModules(styles)

export default class LoginForm extends Component {

  static propTypes = {
    // styles: PropTypes.object,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    response: PropTypes.object,
  }

  render() {
    const { response, handleChange, handleSubmit} = this.props

    return (
      <Container className="ui raised very padded text container segment">
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Input type="email" name="email" placeholder='email' onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <Input type="password" name="password" placeholder='password' onChange={handleChange}/>
          </Form.Field>
          <Button primary={true} type='submit'>Sign In</Button>
        </Form>
        <Message negative hidden={!response.hasFailed}>
          <Message.Header>Ops...</Message.Header>
          <p>{response.response ? response.response.message : 'Something is wrong.'}</p>
        </Message>
      </Container>
    )
  }
}
