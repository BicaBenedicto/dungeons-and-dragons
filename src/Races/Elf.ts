import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static _instancesCounter = 0;
  
  constructor(private nameElf: string, private dexterityElf: number) {
    super(nameElf, dexterityElf);
    this._maxLifePoints = 99;
  }
  
  public get name() {
    return super.name;
  }

  public get dexterity() {
    return super.dexterity;
  }
  
  public static createdRacesInstances(): number {
    Elf._instancesCounter += 1;
    return this._instancesCounter;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
