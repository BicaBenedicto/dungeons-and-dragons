import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static _instancesCounter = 0;
  
  constructor(private nameDwarf: string, private dexterityDwarf: number) {
    super(nameDwarf, dexterityDwarf);
    this._maxLifePoints = 80;
  }

  public static createdRacesInstances(): number {
    Dwarf._instancesCounter += 1;
    return this._instancesCounter;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
