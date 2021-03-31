import { Fighter } from './fighter';

export class Pokemon extends Fighter {
  constructor(name: string,
    private readonly type: string,
    phrase: string,
    isStrongTo: string[],
    hp: number,
    atk: number,
    def: number,
    vel: number,
    private readonly universe: string = "Pokemon") {
    super(name, phrase, isStrongTo, hp, atk, def, vel);
  }
  getUniverse() {
    return this.universe;
  }

  getType() {
    return this.type;
  }
}
