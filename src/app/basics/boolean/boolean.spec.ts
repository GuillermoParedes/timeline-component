import { userLogIn } from './boolean';

describe('Boolean tests', () => {
  it('Return true if my user is logger', () => {
    const resp = userLogIn();
    expect(resp).toBeTruthy();
  });

  it('Return false if my user is logger', () => {
    const resp = userLogIn(false);
    expect(resp).not.toBeTruthy();
  });
});
