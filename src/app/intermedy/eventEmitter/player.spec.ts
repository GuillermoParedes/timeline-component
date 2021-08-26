import { Player } from './player';

describe('Test Event Emiiter', () => {
  let player: Player;
  beforeEach(() => {
    player = new Player();
  });

  it('Event when people recieved damage', () => {
    let newHp = 0;
    player.hpChange.subscribe((hp) => {
      newHp = hp;
    });

    player.getDamage(1000);
    expect(newHp).toBe(0);
  });
});
