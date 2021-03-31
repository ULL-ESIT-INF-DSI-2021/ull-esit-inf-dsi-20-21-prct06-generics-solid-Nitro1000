import 'mocha';
import { expect } from 'chai';
import { Combat } from '../src/ejercicio-1/combat';
import { Pokemon } from '../src/ejercicio-1/pokemon';
import { DragonBall } from '../src/ejercicio-1/dragonball';
import { Digimon } from '../src/ejercicio-1/digimon';



describe('El combate definitivo', () => {
  describe('Prueba de las clases', () => {
    it('Combate entre Goku y Pikachu', () => {
      const gerrero = new DragonBall('Goku', 'kamehameha', ['Pokemon', 'Digimon'], 1000, 500, 200, 400);
      const pokemon = new Pokemon('Pikachu', 'electrico', 'pika pika chuuuu', ['Dragon', 'Digimon'], 2000, 100, 50, 100);
      const fight = new Combat(gerrero, pokemon);
      expect(fight.fight()).to.eql('Ganó: Goku');
    });
  });
});