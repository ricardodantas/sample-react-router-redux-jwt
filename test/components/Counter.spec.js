import React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from '../../src/components/Counter';

describe('<Counter />', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Counter
        increment={() => false}
        incrementAsync={() => false}
        decrement={() => false}
        counter={0}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call increment callback when button is clicked', () => {
    const increment = spy();

    const component = shallow(
      <Counter
        increment={increment}
        incrementAsync={() => false}
        decrement={() => false}
        counter={0}
      />
    );

    const button = component.childAt(1);
    button.simulate('click');

    expect(increment.calledOnce).toEqual(true);
  });

  it('should call decrement callback when button is clicked', () => {
    const decrement = spy();

    const component = shallow(
      <Counter
        increment={() => false}
        incrementAsync={() => false}
        decrement={decrement}
        counter={0}
      />
    );

    const button = component.childAt(2);
    button.simulate('click');

    expect(decrement.calledOnce).toEqual(true);
  });

  it('should call incrementAsync callback when button is clicked', () => {
    const incrementAsync = spy();

    const component = shallow(
      <Counter
        increment={() => false}
        incrementAsync={incrementAsync}
        decrement={() => false}
        counter={0}
      />
    );

    const button = component.childAt(3);
    button.simulate('click');

    expect(incrementAsync.calledOnce).toEqual(true);
  });
});
