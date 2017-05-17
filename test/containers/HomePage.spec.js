import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import HomePage from '../../src/containers/HomePage'
import Nav from '../../src/components/Nav'
import configureStore from '../../src/store/configureStore'
import {initialState} from '../../src/reducers/initialStates/list'

describe('<HomePage />', () => {


  beforeEach(() => {
    global.store = configureStore({ list: initialState })
  })

  it('should display home page', () => {

    const tree = renderer.create(
      <Provider store={global.store}>
        <HomePage list={{}}/>
      </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

})
