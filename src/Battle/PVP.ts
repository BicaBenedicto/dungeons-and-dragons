import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(private char1: Fighter, private char2: Fighter) {
    super(char1);
  }

  public fight(): number {
    while (this.char1.lifePoints > 0 && this.char2.lifePoints > 0) {
      this.char1.attack(this.char2);
      this.char2.attack(this.char1);
    }

    return (this.char2.lifePoints > 0) ? -1 : 1;
  }
}
