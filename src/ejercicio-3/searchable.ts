import {Streamable} from './streamable';

/**
 * Busqueda de elementos
 * @function search Permite buscar elementos.
 */
export interface Searchable<T> extends Streamable<T> {
  search(param: string, value: string): T[];
}
