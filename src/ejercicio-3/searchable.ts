import {Streamable} from './streamable';

/**
 * Permite implementar el método de búsqueda
 * @function search Permite buscar elementos.
 */
export interface Searchable<T> extends Streamable<T> {
  search(param: string, value: string): T[];
}
