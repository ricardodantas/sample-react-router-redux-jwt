import React from 'react'
import { spy } from 'sinon'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import LoginForm from '../../src/components/LoginForm'

describe('<LoginForm />', () => {

  beforeEach(() => {

    global.handleChange = spy()
    global.handleSubmit = spy()
    global.response = {
      response: { }
    }
  })

  it('should render', () => {
    const tree = renderer.create(
      <LoginForm
        handleChange={global.handleChange}
        handleSubmit={global.handleSubmit}
        response={global.response}
      />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should call handleSubmit when form is submited', () => {
    const component = shallow(
      <LoginForm
        handleChange={global.handleChange}
        handleSubmit={global.handleSubmit}
        response={global.response}
      />
    )

    const form = component.find('Form')
    form.simulate('submit')

    expect(global.handleSubmit.calledOnce).toEqual(true)
  })

  it('should call handleChange when input is changed', () => {
    const component = shallow(
      <LoginForm
        handleChange={global.handleChange}
        handleSubmit={global.handleSubmit}
        response={global.response}
      />
    )

    component.find('Input[name="email"]').simulate('change')
    component.find('Input[name="password"]').simulate('change')

    expect(global.handleChange.calledTwice).toEqual(true)
  })

  it('should show error response', () => {
    const response = {
      hasFailed: true,
      response: {
        message: 'Something is wrong.'
      }
    }
    const component = shallow(
      <LoginForm
        handleChange={global.handleChange}
        handleSubmit={global.handleSubmit}
        response={response}
      />
    )

    const errorMessage = component.find('Message')

    expect(errorMessage.props().hidden).toEqual(false)
    expect(errorMessage.find('p').text()).toEqual(response.response.message)
  })

})
