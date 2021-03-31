import 'mocha';
import { expect } from 'chai';
import { Combat } from '../src/ejercicio-1/combat';
import { Pokemon } from '../src/ejercicio-1/pokemon';
import { DragonBall } from '../src/ejercicio-1/dragonball';
import { Digimon } from '../src/ejercicio-1/digimon';
import { AllFighters } from '../src/ejercicio-1/universes';



describe('El combate definitivo', () => {
  describe('Prueba de las clases', () => {
    it('Combate entre Goku y Pikachu', () => {
      const gerrero = new DragonBall('Goku', 'kamehameha', ['Pokemon', 'Digimon'], 1000, 500, 200, 400);
      const pokemon = new Pokemon('Pikachu', 'electrico', 'pika pika chuuuu', ['Dragon', 'Digimon'], 200, 100, 50, 100);
      const fight = new Combat(gerrero, pokemon);
      expect(fight.fight()).to.eql('Ganó: Goku');
    });
    it('Mostrando todos los luchadores', () => {
      const gerrero = new DragonBall('Goku', 'kamehameha', ['Pokemon', 'Digimon'], 1000, 500, 200, 400);
      const pokemon = new Pokemon('Pikachu', 'electrico', 'pika pika chuuuu', ['DragonBall', 'Digimon'], 200, 100, 50, 100);
      const digimon = new Digimon('Agumon', 'Flama bebe', ['DragonBall'], 500, 150, 200, 100);
      const fighters = new AllFighters([gerrero, pokemon, digimon]);
      fighters.write();
    });
  });
});