import { increment } from './number';

describe('Number tests', () => {
  it('Has return a 100 if the num is major', () => {
    const resp = increment(300);
    expect(resp).toBe(100);
  });

  it('Has return the same number if it is minor', () => {
    const resp = increment(20);
    console.log('resp', resp);
    expect(resp).toBe(20 + 1);
  });
});
