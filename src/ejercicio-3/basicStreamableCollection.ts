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
   * @param value El valor del parámetro
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
   * Obtiene la duración de la colección
   * @returns Duración de la colección
   */
  getNumEmissions() {
    return this.emissions.length;
  }
}
