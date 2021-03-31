import { Fighter } from './fighter';

export class DragonBall extends Fighter {
    constructor(name: string,
        phrase: string,
        isStrongTo: string[],
        hp: number,
        atk: number,
        def: number,
        vel: number,
        private readonly universe: string = "DragonBall") {
        super(name, phrase, isStrongTo, hp, atk, def, vel);
    }
    getUniverse() {
        return this.universe;
    }

}
