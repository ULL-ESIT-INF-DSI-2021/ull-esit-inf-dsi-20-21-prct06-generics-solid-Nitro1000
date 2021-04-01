import { isConvertible } from './convertible';

export type volumeOptions = 'dam3' | 'm3' | 'dm3';

export class Volume implements isConvertible<volumeOptions> {
  /**
   * Constructor de la clase
   */
  constructor(public readonly value: number,
    public readonly currentUnit: volumeOptions,
    public readonly newUnit: volumeOptions) { }

  /**
   * Función conversor
   * @returns string con la conversion
  */
  public converter(): string {
    let convert: number = 0;
    let result: string = '';
    switch (this.getCurrent()) {
      case 'dam3':
        switch (this.getNew()) {
          case 'm3':
            convert = this.getvolume() * 1000;
            result = convert + ' Metros Cúbicos';
            break;
          case 'dm3':
            convert = this.getvolume() * 1000000;
            result = convert + ' litros';
            break;
          default:
            result = 'Unidad nueva no conocidad';
            break;
        }
        break;
      case 'm3':
        switch (this.getNew()) {
          case 'dam3':
            convert = this.getvolume() / 1000;
            result = convert + ' Decámetro cúbico';
            break;
          case 'dm3':
            convert = this.getvolume() * 1000;
            result = convert + ' litros';
            break;
          default:
            result = 'Unidad nueva no conocidad';
            break;
        }
        break;
      case 'dm3':
        switch (this.getNew()) {
          case 'dam3':
            convert = this.getvolume() * 1000000;
            result = convert + ' Decámetro cúbico';
            break;
          case 'm3':
            convert = this.getvolume() / 1000;
            result = convert + ' Metros Cúbicos';
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
   * Se obtiene el volumen
   * @returns valor volumen
   */
  public getvolume(): number {
    return this.value;
  }
  /**
   * Se obtiene la unidad de medida actual
   * @returns unidad actual
   */
  public getCurrent(): volumeOptions {
    return this.currentUnit;
  }
  /**
   * Se obtiene la unidad de medida nueva
   * @returns unidad nueva
   */
  public getNew(): volumeOptions {
    return this.newUnit;
  }
}
