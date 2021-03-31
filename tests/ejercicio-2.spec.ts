import 'mocha';
import { expect } from 'chai';
import { Time } from '../src/ejercicio-2/time';
import { Volume } from '../src/ejercicio-2/volume';
import { Force } from '../src/ejercicio-2/force';
import { Temperature } from '../src/ejercicio-2/temperature';


describe('Conversor de unidades', () => {
  const tiempo = new Time(280, 'H', 'M');
  const volume = new Volume(280, 'dam3', 'm3');
  const force = new Force(45, 'Newton', 'Dina');

  describe('Prueba conversor fuerza', () => {
    it('45 Newton = 4500000 Dina', () => {
      expect(force.converter()).to.be.equal('4500000 Dina');
    });
  });
  describe('Prueba conversor tiempo', () => {
    it('280 Horas = 16800 Minutos', () => {
      expect(tiempo.converter()).to.be.equal('16800 Minutos');
    });
  });
  describe('Prueba conversor volumen', () => {
    it('280 decámetro cúbico = 280000 Metros Cúbicos', () => {
      expect(volume.converter()).to.be.equal('280000 Metros Cúbicos');
    });
  });
});
