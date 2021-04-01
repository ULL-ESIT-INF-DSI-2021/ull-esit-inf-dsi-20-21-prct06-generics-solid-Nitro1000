import { isConvertible } from './convertible';

export type forceOptions = 'Newton' | 'Kilopondio' | 'Dina';

export class Force implements isConvertible<forceOptions> {
  /**
   * Constructor de la clase
   */
  constructor(public readonly value: number,
    public readonly currentUnit: forceOptions,
    public readonly newUnit: forceOptions) { }

  /**
   * Función conversor
   * @returns string con la conversion
  */
  public converter(): string {
    let convert: number = 0;
    let result: string = '';
    switch (this.getCurrent()) {
      case 'Newton':
        switch (this.getNew()) {
          case 'Kilopondio':
            convert = this.getforce() * 0.101972;
            result = convert + ' Kilopondio';
            break;
          case 'Dina':
            convert = this.getforce() * 100000;
            result = convert + ' Dina';
            break;
          default:
            result = 'Unidad nueva no conocidad';
            break;
        }
        break;
      case 'Kilopondio':
        switch (this.getNew()) {
          case 'Newton':
            convert = this.getforce() * 9.80665;
            result = convert + ' Newton';
            break;
          case 'Dina':
            convert = this.getforce() * 980665;
            result = convert + ' Dina';
            break;
          default:
            result = 'Unidad nueva no conocidad';
            break;
        }
        break;
      case 'Dina':
        switch (this.getNew()) {
          case 'Newton':
            convert = this.getforce() * 0.00001;
            result = convert + ' Newton';
            break;
          case 'Kilopondio':
            convert = this.getforce() * 1.0197e-6;
            result = convert + ' Kilopondio';
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
  /**
   * Se obtiene la fuerza
   * @returns valor fuerza
   */
  public getforce(): number {
    return this.value;
  }
  /**
   * Se obtiene la unidad de medida actual
   * @returns unidad actual
   */
  public getCurrent(): forceOptions {
    return this.currentUnit;
  }
  /**
   * Se obtiene la unidad de medida nueva
   * @returns unidad nueva
   */
  public getNew(): forceOptions {
    return this.newUnit;
  }
}
