import { getSeries } from './array';

describe('Array tests', () => {
  it('Have that 3 element minus', () => {
    const resp = getSeries();
    console.log('resp', resp.length);
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it('There must be Witcher, Big Bang Theory', () => {
    const resp = getSeries();
    expect(resp).toContain('Witcher');
    expect(resp).toContain('Big Bang Theory');
  });
});
