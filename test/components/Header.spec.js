import React from 'react'
import { spy } from 'sinon'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Header from '../../src/components/Header'
import Nav from '../../src/components/Nav'

describe('<Header />', () => {

  it('should render', () => {
    const tree = renderer.create(
      <Header><div></div></Header>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

})
