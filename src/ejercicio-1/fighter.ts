
export abstract class Fighter {
  constructor(private readonly name: string, 
    private readonly phrase: string, 
    private readonly isStrongTo: string[],
    private readonly hp: number, 
    private readonly atk: number, 
    private readonly def: number, 
    private readonly vel: number) {

  }
  getName(): string {
    return this.name;
  }

  getPhrase(): string {
    return this.phrase;
  }

  getIsStrongTo(): string[] {
    return this.isStrongTo;
  }

  abstract getUniverse(): string;

  getHP(): number {
    return this.hp;
  }

  getATK(): number {
    return this.atk;
  }

  getDEF(): number {
    return this.def;
  }

  getVEL(): number {
    return this.vel;
  }
}