import { Player } from './clase';

describe('Classes tests', () => {
  const player = new Player();
  beforeAll(() => {});
  beforeEach(() => {});
  afterAll(() => {});
  afterEach(() => {});

  it('If I send 20 damage, their return 80', () => {
    const resp = player.getDamage(20);

    expect(resp).toBe(80);
  });
  it('If I send 50 damage, their return 30', () => {
    const resp = player.getDamage(50);

    expect(resp).toBe(30);
  });

  it('If I send 200 damage, their return 0', () => {
    const resp = player.getDamage(200);

    expect(resp).toBe(0);
  });
});
