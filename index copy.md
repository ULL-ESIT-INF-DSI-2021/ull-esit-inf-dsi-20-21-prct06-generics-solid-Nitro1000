# Práctica 5 - Objetos, clases e interfaces


## Índice

1. [Introducción](#id1)
2. [Ejercicio 1](#id2)
2. [Ejercicio 2](#id3)
3. [Ejercicio 3](#id4)
4. [Conclusión](#id10)


---------------------

## Introducción<a name="id1"></a>
En esta práctica aprenderemos a utilizar más en profundidad las clases e interfaces genéricas del lenguaje TypeScript. Además, también podremos utilizar los principios SOLID de diseño orientado a objetos.



### Ejercicio 1<a name="id2"></a>
Para este ejercicio se nos pide partiendo de la practica anterior que desarrollemos una serie de clases entre ellas una abstracta que sera la superclase de las otras. Lo primero es desarrollar la clase Fighter que sera la superclase abstract, luego haremos el resto de clase que en general contendran lo mismo exepto por la clase Pokemon que tendra un atributo extra (type) como en la practica anterior. En este ejercicio se pide utilizar los principios SOLID vistos en clase, mas especificamente Single Responsability y Open-Closed, a mi personalmente se me hizo complicado debido a que en la practica anterior yo entendia que la clase Pokedex era en realidad Pokemon por lo que no hice ningun tipo de contenedor de pokemon.

A continuación se muestra el spec correspondiente a este ejercicio.

```typescript
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
```
Las clases son las siguientes:
```typescript
/**
 * Superclase abstracta que representa a un luchador
 */
export abstract class Fighter {
  /**
   * Constructor de la clase
   * @param name Nombre del luchador
   * @param phrase Frace representativa del luchador
   * @param isStrongTo Fortalezas del luchador
   * @param hp Puntos de salud
   * @param atk ataque
   * @param def Defensa
   * @param vel Velocidad
   */
  constructor(private readonly name: string, 
    private readonly phrase: string, 
    private readonly isStrongTo: string[],
    private readonly hp: number, 
    private readonly atk: number, 
    private readonly def: number, 
    private readonly vel: number) {

  }
  getName(): string {
    return this.name;
  }

  getPhrase(): string {
    return this.phrase;
  }

  getIsStrongTo(): string[] {
    return this.isStrongTo;
  }

  abstract getUniverse(): string;

  getHP(): number {
    return this.hp;
  }

  getATK(): number {
    return this.atk;
  }

  getDEF(): number {
    return this.def;
  }

  getVEL(): number {
    return this.vel;
  }
}

```

---------------------

### Ejercicio 2<a name="id3"></a>
Se nos pide hacer un conversor de unidades de medida, entre ellas tenemos: fuerza, volumen, temperatura y tiempo, por ejemplo. Se implemento una interfaz genérica isConvertible que permita realizar conversiones entre sistemas para cada magnitud considerada. Esta interfaz contiene unos atributos tipo T genericos que nos permiten identificar el tipo de dato que evaluamos, además hay una función *converter* que sera la que nos dara el valor transformado a la magnitud deseada. En cada clase tendremos mas o menos lo mismo, solo con ligeros cambios como el tipo de dato que usamos para convertir que depende de cada clase. Simplemente lo que se hace en cada caso es obtener las magnitudes que se van a usar y dependiendo de la magnitud actual del valor mostramos el valor a la magnitud nueva, todo esto se hace con unos swichts.  

A continuación se muestra el spec correspondiente a este ejercicio.

```typescript
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

```
Las clases son las siguientes:
```typescript


```

---------------------

### Ejercicio 3<a name="id4"></a>
En este ejercicio se nos pide trabajar con interfaces genericas y con clases. Se tiene que hacer una clase Movie, Documentary y Serie.
A continuación se muestra el spec correspondiente a este ejercicio.

```typescript

```
Las clases son las siguientes:
```typescript


```

---------------------


## Conclusión<a name="id10"></a>


