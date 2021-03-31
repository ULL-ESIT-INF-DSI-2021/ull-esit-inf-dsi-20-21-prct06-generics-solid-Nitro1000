import {isConvertible} from './convertible';

export type massOptions = 'Kilogramo' | 'Libra' | 'Onza';

export class Mass implements isConvertible<massOptions> {
  /**
   * Constructor de la clase
   */
  constructor(public readonly value: number,
    public readonly currentUnit: massOptions,
    public readonly newUnit: massOptions) { }

  /**
   * Función conversor
   * @returns string con la conversion
  */
  public converter(): string {
    let convert: number = 0;
    let result: string = '';
    switch (this.getCurrent()) {
      case 'Kilogramo':
        switch (this.getNew()) {
          case 'Libra':
            convert = this.getMass() * 2.20462;
            result = convert + ' Libra';
            break;
          case 'Onza':
            convert = this.getMass() * 35.272;
            result = convert + ' Onza';
            break;
          default:
            result = 'Unidad nueva no conocidad';
            break;
        }
        break;
      case 'Libra':
        switch (this.getNew()) {
          case 'Kilogramo':
            convert = this.getMass() * 0.453592;
            result = convert + ' Kilogramo';
            break;
          case 'Onza':
            convert = this.getMass() * 16;
            result = convert + ' Onza';
            break;
          default:
            result = 'Unidad nueva no conocidad';
            break;
        }
        break;
      case 'Onza':
        switch (this.getNew()) {
          case 'Kilogramo':
            convert = this.getMass() * 0.0283495;
            result = convert + ' Kilogramo';
            break;
          case 'Libra':
            convert = this.getMass() * 0.0625;
            result = convert + ' Libra';
            break;
          default:
            result = 'Unidad nueva no conocidad';
            break;
        }
        break;
      default:
        result = 'Unidad actual no conocidad';
        break;
    }
    return result;
  }
  public getMass(): number {
    return this.value;
  }
  public getCurrent(): massOptions {
    return this.currentUnit;
  }
  public getNew(): massOptions {
    return this.newUnit;
  }
}
