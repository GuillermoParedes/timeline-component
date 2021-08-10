import { message } from './string';

describe('String test', () => {
  it('Return a String', () => {
    const resp = message('Alekey');
    expect(typeof resp).toBe('string');
  });

  it('Return a greeting with Alekey', () => {
    const name = 'Alekey';
    const resp = message(name);
    expect(resp).toContain(`${name}`);
  });
});
