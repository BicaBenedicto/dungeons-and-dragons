import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _type: EnergyType = 'stamina';
  static _instancesCounter = 0;

  public static createdArchetypeInstances(): number {
    Warrior._instancesCounter += 1;
    return this._instancesCounter;
  }

  public get energyType(): EnergyType {
    return this._type;
  }
}
