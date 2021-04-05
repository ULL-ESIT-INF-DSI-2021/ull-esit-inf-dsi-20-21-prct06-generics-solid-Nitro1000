/* eslint-disable max-len */
import 'mocha';
import { assert, expect } from 'chai';
import { RandomNumber } from '../src/practica7/randomNumber';


describe('clase RandomNumber ', () => {
  const ramdomNumber= RandomNumber.getRandomNumber();
  it('Se crea una instancia RandomNumber', () => {
    expect(ramdomNumber instanceof RandomNumber).to.eql(true);
  });
  it('número aleatorio en punto flotante generado en el rango [0, 1].', () => {
    console.log(ramdomNumber.getRandNumF01());
    assert.isAtLeast(ramdomNumber.getRandNumF01(), 0);
  });
  it('número aleatorio en punto flotante generado en el rango [n, m], donde n y m son parámetros del método correspondiente.', () => {
    ramdomNumber.setRandNumFNM(2, 5);
    console.log(ramdomNumber.getRandNumFNM());
    assert.isAtLeast(ramdomNumber.getRandNumFNM(), 2);
  });
  it('número aleatorio entero generado en el rango [n, m], donde n y m son parámetros del método correspondiente.', () => {
    ramdomNumber.setRandNumINM(2, 5);
    console.log(ramdomNumber.getRandNumINM());
    assert.isAtLeast(ramdomNumber.getRandNumINM(), 2);
  });
});
