import { isConvertible } from './convertible';

export type temperatureOptions = "Celcius" | "Kelvin" | "Fahrenheit";

export class Temperature implements isConvertible<temperatureOptions> {
  /**
   * Constructor de la clase
   */
  constructor(public readonly value: number,
    public readonly currentUnit: temperatureOptions,
    public readonly newUnit: temperatureOptions) { }

  /**
   * Función conversor
   * @returns string con la conversion
  */
  public converter(): string {
    let convert: number = 0;
    let result: string = '';
    switch (this.getCurrent()) {
      case 'Celcius':
        switch (this.getNew()) {
          case 'Kelvin':
            convert = this.gettemperature() + 273.15;
            result = convert + ' Kelvin';
            break;
          case 'Fahrenheit':
            convert = this.gettemperature() * (9 / 5) + 32;
            result = convert + ' Fahrenheit';
            break;
          default:
            result = 'Unidad nueva no conocidad';
            break;
        }
        break;
      case 'Kelvin':
        switch (this.getNew()) {
          case 'Celcius':
            convert = this.gettemperature() - 273.15;
            result = convert + ' Celcius';
            break;
          case 'Fahrenheit':
            convert = (this.gettemperature() - 273.15) * (9 / 5) + 32;
            result = convert + ' Fahrenheit';
            break;
          default:
            result = 'Unidad nueva no conocidad';
            break;
        }
        break;
      case 'Fahrenheit':
        switch (this.getNew()) {
          case 'Celcius':
            convert = (this.gettemperature() - 32) * (5 / 9);
            result = convert + ' Celcius';
            break;
          case 'Kelvin':
            convert = (this.gettemperature() - 32) * (5 / 9) + 273.15;
            result = convert + ' Kelvin';
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
   * Se obtiene la temperatura
   * @returns valor temperatura
   */
  public gettemperature(): number {
    return this.value;
  }
  /**
   * Se obtiene la unidad de medida actual
   * @returns unidad actual
   */
  public getCurrent(): temperatureOptions {
    return this.currentUnit;
  }
  /**
   * Se obtiene la unidad de medida nueva
   * @returns unidad nueva
   */
  public getNew(): temperatureOptions {
    return this.newUnit;
  }
}
