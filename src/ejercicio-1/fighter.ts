/**
 * Superclase abstracta que representa a un luchador
 */
export abstract class Fighter {
  /**
   * Constructor de la clase
   * @param name Nombre del luchador
   * @param phrase Frace representativa del luchador
   * @param isStrongTo Fortalezas del luchador
   * @param hp Puntos de salud
   * @param atk ataque
   * @param def Defensa
   * @param vel Velocidad
   */
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