import {Searchable} from './searchable';

/**
 * Clase que representa una colección de emisiones que se pueden buscar
 */
export abstract class BasicStreamableCollection<T> implements Searchable<T> {
  /**
   * Consctructor de la clase
   * @param emissions Contenedor con las emisiones
   */
  constructor(protected emissions: T[]) {
  }

  /**
   * Permite buscar emisiones por un valor como título, año, etc.
   * @param param El parámetro por el que desea buscar
   * @param value Valor a buscar
   */
  abstract search(param: string, value: string): T[];

  /**
   * Permite insertar un nuevo elemento a la colección
   * @param newemissions Elemento que queremos insertar
   */
  addEmissions(newemissions: T) {
    this.emissions.push(newemissions);
  }

  /**
   * Devuelve la colección
   */
  abstract getEmissions(): T[];

  /**
   * Numero de emisiones
   * @returns Numero de emisiones
   */
  getNumEmissions() {
    return this.emissions.length;
  }
}
