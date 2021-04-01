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
  /**
   * Obtenemos el nombre
   * @returns nombre
   */
  getName(): string {
    return this.name;
  }

  /**
   * Obtenemos la frase del luchador
   * @returns frase
   */
  getPhrase(): string {
    return this.phrase;
  }

  /**
   * Obtenemos las fortalezas
   * @returns fortalezas
   */
  getIsStrongTo(): string[] {
    return this.isStrongTo;
  }

  /**
   * Obtenemos el universo del luchador
   * @returns universo
   */
  abstract getUniverse(): string;

  /**
   * Obtenemos la vida
   * @returns vida
   */
  getHP(): number {
    return this.hp;
  }

  /**
   * Obtenemos el ataque
   * @returns ataque
   */
  getATK(): number {
    return this.atk;
  }

  /**
   * Obtenemos la defensa
   * @returns defensa
   */
  getDEF(): number {
    return this.def;
  }

  /**
   * Obtenemos la velocidad
   * @returns velocidad
   */
  getVEL(): number {
    return this.vel;
  }
}