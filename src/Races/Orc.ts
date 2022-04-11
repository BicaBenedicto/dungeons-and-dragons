import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static _instancesCounter = 0;
  
  constructor(private nameOrc: string, private dexterityOrc: number) {
    super(nameOrc, dexterityOrc);
    this._maxLifePoints = 74;
  }
  
  public get name() {
    return super.name;
  }

  public get dexterity() {
    return super.dexterity;
  }
  
  public static createdRacesInstances(): number {
    Orc._instancesCounter += 1;
    return this._instancesCounter;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
