import Monster from './Monster';

export default class Dragon extends Monster {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    super();
    this._lifePoints = 1500;
    this._strength = 150;
  }
}
