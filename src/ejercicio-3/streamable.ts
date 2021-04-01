/**
 * Propiedades y métodos con los que debería contar una colección de emisiones
 * @function addEmissions añade emisiones
 * @function getEmissions Retorna las emisiones
 * @function getNumEmissions Retorna el numero de emisiones
 */
export interface Streamable<T> {
    addEmissions(newemissions: T): void;
    getEmissions(): T[];
    getNumEmissions(): number;
}
