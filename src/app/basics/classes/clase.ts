export class Player {
  hp: number;

  constructor() {
    this.hp = 100;
  }

  getDamage(damage: number) {
    if (damage >= this.hp) {
      this.hp = 0;
      return this.hp;
    }
    this.hp = this.hp - damage;
    return this.hp;
  }
}
