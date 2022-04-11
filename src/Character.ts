import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _energy: Energy;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;

  constructor(private _name: string) {
    this._race = new Elf(_name, 10);
    this._archetype = new Mage(_name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public receiveDamage(attackPoints: number): number {
    if (attackPoints > this.defense) {
      if (attackPoints - this.defense < 0) {
        this._lifePoints = -1;
        return this.lifePoints;
      }
      this._lifePoints = attackPoints - this.defense;
    }
    return this.lifePoints;
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  public levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    const moreLife = getRandomInt(1, 10);
    if (this.maxLifePoints + moreLife <= this.race.maxLifePoints) {
      this._maxLifePoints += getRandomInt(1, 10);
    } else {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this.maxLifePoints;
  }

  public special(): void {
    this._energy.amount = 10;
  }
}
