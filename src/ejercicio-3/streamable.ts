/**
 * Allows to create a collection of streamable items
 * @function addEmissions Allows to insert a new emission to the collection
 * @function getEmissions Returns the collection
 * @function getNumberOfEmissions Obtains the length of the collection
 */
export interface Streamable<T> {
    addEmissions(newemissions: T): void;
    getEmissions(): T[];
    getNumEmissions(): number;
}
