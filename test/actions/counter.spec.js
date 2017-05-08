import { spy } from 'sinon';
import { increment, decrement, incrementAsync } from '../../src/actions/counter';

describe('Counter actions', () => {
  it('should create increment action', () => {
    expect(increment()).toEqual({ type: increment.toString() });
  });

  it('should create decrement action', () => {
    expect(decrement()).toEqual({ type: decrement.toString() });
  });

  it('should create increment action async', done => {
    const fn = incrementAsync(1);
    expect(fn).toBeInstanceOf(Function);

    const dispatch = spy();
    fn(dispatch);

    setTimeout(() => {
      expect(dispatch.calledWith({ type: increment.toString() })).toEqual(true);
      done();
    }, 5);
  });
});
