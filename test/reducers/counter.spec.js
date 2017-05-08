import counter from '../../src/reducers/counter';
import { increment, decrement } from '../../src/actions/counter';

describe('Counter reducers', () => {
  it('should handle initial state', () => {
    expect(counter(undefined, {})).toEqual(0);
  });

  it('should handle increment', () => {
    expect(counter(1, { type: increment })).toEqual(2);
  });

  it('should handle decrement', () => {
    expect(counter(1, { type: decrement })).toEqual(0);
  });

  it('should handle unknown action type', () => {
    expect(counter(1, { type: 'unknown' })).toEqual(1);
  });
});
