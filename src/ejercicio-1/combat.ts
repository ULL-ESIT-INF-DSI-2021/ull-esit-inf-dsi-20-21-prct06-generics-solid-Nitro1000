import { Fighter } from './fighter';
import { Pokemon } from './pokemon';

export class Combat {
    constructor(public fighter1: Fighter, public fighter2: Fighter) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
    }

    fight(): string {
        
        let damage1: number = this.efficiency(this.fighter1, this.fighter2);
        let damage2: number = this.efficiency(this.fighter2, this.fighter1);

        let hp1: number = this.fighter1.getHP();
        let hp2: number = this.fighter2.getHP();

        while (hp1 > 0 && hp2 > 0) {
            console.log(this.fighter1.getName() + ' ataca a ' + this.fighter2.getName());
            console.log(this.fighter1.getPhrase());
            hp2 -= damage1;
            if (hp2 > 0) {
                console.log(this.fighter2.getName() + ' tiene ' + hp2 + ' de vida.');
            }

            if (hp2 > 0) {
                console.log(this.fighter2.getName() + ' ataca a ' + this.fighter1.getName());
                console.log(this.fighter2.getPhrase());
                hp1 -= damage2;
                console.log(this.fighter1.getName() + ' tiene ' + hp1 + ' de vida.');
            }
        }
        if (hp1 > 0) {
            return this.winner(this.fighter1);
        }
        return this.winner(this.fighter2);
    }

    efficiency(fighter1: Fighter, fighter2: Fighter): number {
        let power: number = 0.5;
        if (fighter1.getIsStrongTo().includes(fighter2.getUniverse()))
            power = 2;
        else if ((fighter1.getUniverse() == fighter2.getUniverse()))
            power = 1;
        return (50 * (fighter1.getATK() / fighter2.getDEF()) * power);
    }

    winner(fighter:Fighter) {
        const result: string = ('Ganó: ' + fighter.getName());
        console.log(result);
        return result;
    }
}
