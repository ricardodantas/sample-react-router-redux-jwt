import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import CounterPage from '../../src/containers/CounterPage';
import configureStore from '../../src/store/configureStore';

describe('<CounterPage />', () => {
  it('should display initial count', () => {
    const store = configureStore({ counter: 0 });

    const tree = renderer.create(
      <Provider store={store}>
        <CounterPage />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should display updated count after increment button click', () => {
    const store = configureStore({ counter: 0 });

    const container = mount(
      <Provider store={store}>
        <CounterPage />
      </Provider>
    );

    const button = container.childAt(1);
    const span = container.find('span');

    button.simulate('click');
    expect(span.text()).toEqual('Counter: 1');
  });

  it('should display updated count after decrement button click', () => {
    const store = configureStore({ counter: 0 });

    const container = mount(
      <Provider store={store}>
        <CounterPage />
      </Provider>
    );

    const button = container.childAt(2);
    const span = container.find('span');

    button.simulate('click');
    expect(span.text()).toEqual('Counter: -1');
  });
});
