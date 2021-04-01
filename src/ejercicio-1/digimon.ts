import {Fighter} from './fighter';

/**
 * Clase que simula un Digimon
 */
export class Digimon extends Fighter {
  /**
   * Constructor de la clase
   * @param name nombre
   * @param phrase frase principal
   * @param isStrongTo Fortalezas
   * @param hp Vida
   * @param atk Ataque
   * @param def Defensa
   * @param vel Velocidad
   * @param universe Universo por defecto Digimon
   */
  constructor(name: string,
      phrase: string,
      isStrongTo: string[],
      hp: number,
      atk: number,
      def: number,
      vel: number,
    private readonly universe: string = 'Digimon') {
    super(name, phrase, isStrongTo, hp, atk, def, vel);
  }
  /**
     * Se obtiene el universo al que pertenece el digimon
     * @returns universo del digimon
     */
  getUniverse() {
    return this.universe;
  }
}
