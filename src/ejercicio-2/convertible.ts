/**
 * Interfaz generica para la conversión
 */

export interface isConvertible<T> {
    value: number;
    currentUnit: T;
    newUnit: T;

    /**
     * Funcion para la conversion de unidades
    */
     converter(): string;
}
