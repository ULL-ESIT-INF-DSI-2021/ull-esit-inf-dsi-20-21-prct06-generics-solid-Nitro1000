import { Fighter } from './fighter';

/**
 * Clase que se usa como almacenamiento de Luchadores
 */
export class AllFighters {
  /**
   * Constructor de la clase
   * @param fighters Array que contiene a todos los luchadores
   */
  constructor(public fighters: Fighter[]) {
  }

  /**
   * Muestra a todos los luchadores
   * @returns todos los luchadores
   */
  write() {
    console.table(this.fighters);
  }
}
