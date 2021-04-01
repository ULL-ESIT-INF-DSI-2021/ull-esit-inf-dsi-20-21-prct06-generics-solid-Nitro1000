import {Fighter} from './fighter';

/**
 * Clase que simula un Pokemon
 */
export class Pokemon extends Fighter {
  /**
   * Constructor de la clase
   * @param name nombre
   * @param phrase frase principal
   * @param isStrongTo Fortalezas
   * @param hp Vida
   * @param atk Ataque
   * @param def Defensa
   * @param vel Velocidad
   * @param universe Universo por defecto Pokemon
   */
  constructor(name: string,
    private readonly type: string,
    phrase: string,
    isStrongTo: string[],
    hp: number,
    atk: number,
    def: number,
    vel: number,
    private readonly universe: string = 'Pokemon') {
    super(name, phrase, isStrongTo, hp, atk, def, vel);
  }
  /**
     * Se obtiene el universo al que pertenece el Pokemon
     * @returns universo del Pokemon
     */
  getUniverse() {
    return this.universe;
  }
  /**
   * Obtenemos el tipo del Pokemon
   * @returns tipo del pokemon
   */
  getType() {
    return this.type;
  }
}
