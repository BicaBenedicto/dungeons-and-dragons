import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static _instancesCounter = 0;
  
  constructor(private nameHalfling: string, private dexterityHalfling: number) {
    super(nameHalfling, dexterityHalfling);
    this._maxLifePoints = 60;
  }

  public static createdRacesInstances(): number {
    Halfling._instancesCounter += 1;
    return this._instancesCounter;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
