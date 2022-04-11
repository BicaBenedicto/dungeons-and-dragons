import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _type: EnergyType = 'mana';
  static _instancesCounter = 0;

  public static createdArchetypeInstances(): number {
    Mage._instancesCounter += 1;
    return this._instancesCounter;
  }

  public get energyType(): EnergyType {
    return this._type;
  }
}
