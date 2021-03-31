import {BasicStreamableCollection} from './basicStreamableCollection';

/**
 * Atributos que tiene una serie
 * @param title Título de la serie
 * @param year Año en que fue lanzado
 * @param genero genero de la serie
 */
export type serie = {
  title: string;
  year: number;
  genero: string;
}

/**
 * Clase que representa una colección de series.
 */
export class Series extends BasicStreamableCollection<serie> {
  /**
   * Crea una nueva instancia de una colección
   * @param Emissions Colección de series
   */
  constructor(protected Emission: serie[]) {
    super(Emission);
  }

  /**
   * Permite buscar elementos por un valor como título, año, etc.
   * @param param El parámetro por el que desea buscar
   * @param value El valor del parámetro
   */
  search(param: string, value: string) {
    let result: serie[] = [];
    switch (param) {
      case 'titulo':
        result = this.getEmissions().filter((x) => (x.title == value));
        break;
      case 'año':
        result = this.getEmissions().filter((x) => (x.year.toString() == value));
        break;
      case 'genero':
        result = this.getEmissions().filter((x) => (x.genero == value));
        break;
      default:
        console.log('No se encontro ningun elemento con los parametros dados');
        break;
    }
    return result;
  }

  /**
  * Devuelve la colección de emisiones.
  */
  getEmissions() {
    return this.emissions;
  }
}
