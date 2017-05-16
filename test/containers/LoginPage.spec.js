import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import LoginPage from '../../src/containers/LoginPage'
import configureStore from '../../src/store/configureStore'
import {initialState} from '../../src/reducers/initialStates/login'

describe('<LoginPage />', () => {


  beforeEach(() => {
    global.store = configureStore({ login: initialState })
  })

  it('should display login page', () => {

    const tree = renderer.create(
      <Provider store={global.store}>
        <LoginPage />
      </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should display LoginForm component', () => {
    const component = mount(
      <Provider store={global.store}>
        <LoginPage />
      </Provider>
    )

    const loginForm = component.find('LoginForm')
    expect(loginForm.exists()).toBe(true)
  })

  it('should display Header component', () => {
    const component = mount(
      <Provider store={global.store}>
        <LoginPage />
      </Provider>
    )

    const header = component.find('Header')
    expect(header.exists()).toBe(true)
  })

})
