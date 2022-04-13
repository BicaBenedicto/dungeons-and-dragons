import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Character from '../Character';

export default class PVE extends Battle {
  constructor(
    private char: Character | Fighter,
    private monsters: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(char);
  }

  private fightIndividuality(
    monster: Monster | Fighter | SimpleFighter,
  ): boolean {
    while (this.char.lifePoints > 0 && monster.lifePoints > 0) {
      this.char.attack(monster);
      monster.attack(this.char);
    }
    return (this.char.lifePoints > 0);
  }

  public fight(): number {
    for (let index = 0; index < this.monsters.length; index += 1) {
      const resultFight = this.fightIndividuality(this.monsters[index]);
      if (!resultFight) return -1;
    }

    return 1;
  }
}
