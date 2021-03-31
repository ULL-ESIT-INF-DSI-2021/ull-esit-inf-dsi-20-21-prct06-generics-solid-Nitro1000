import { isConvertible } from './convertible';

export type timeOptions = 'H' | 'M' | 'S';

export class Time implements isConvertible<timeOptions> {
  /**
   * Constructor de la clase
   */
  constructor(public readonly value: number,
    public readonly currentUnit: timeOptions,
    public readonly newUnit: timeOptions) { }

  /**
   * Función conversor
   * @returns string con la conversion
  */
  public converter(): string {
    let value: number = 0;
    let result: string = '';
    switch (this.getCurrent()) {
      case 'H':
        switch (this.getNew()) {
          case 'M':
            value = this.getTime() * 60;
            result = value + ' Minutos';
            break;
          case 'S':
            value = this.getTime() * 3600;
            result = value + ' Segundos';
            break;
          default:
            result = 'Unidad nueva no conocidad';
            break;
        }
        break;
      case 'M':
        switch (this.getNew()) {
          case 'H':
            value = this.getTime() * 0.0166667;
            result = value + ' Horas';
            break;
          case 'S':
            value = this.getTime() * 60;
            result = value + ' Segundos';
            break;
          default:
            result = 'Unidad nueva no conocidad';
            break;
        }
        break;
      case 'S':
        switch (this.getNew()) {
          case 'H':
            value = this.getTime() * 0.000277778;
            result = value + ' Horas';
            break;
          case 'M':
            value = this.getTime() * 0.0166667;
            result = value + ' Minutos';
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
  public getTime(): number {
    return this.value;
  }
  public getCurrent(): timeOptions {
    return this.currentUnit;
  }
  public getNew(): timeOptions {
    return this.newUnit;
  }
}
