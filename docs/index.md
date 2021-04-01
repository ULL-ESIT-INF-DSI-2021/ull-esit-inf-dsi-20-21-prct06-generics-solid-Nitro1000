# Práctica 5 - Objetos, clases e interfaces


## Índice

1. [Introducción](#intro)
2. [Ejercicio 1](#E1)
2. [Ejercicio 2](#E2)
3. [Ejercicio 3](#E4)
4. [Coveralls](#coveralls)
5. [Conclusión](#conclu)
6. [Bibliografía](#biblio)


---------------------

## Introducción<a name="intro"></a>
En esta práctica aprenderemos a utilizar más en profundidad las clases e interfaces genéricas del lenguaje TypeScript. Además, también podremos utilizar los principios SOLID de diseño orientado a objetos.



### Ejercicio 1<a name="E1"></a>
Para este ejercicio se nos pide partiendo de la practica anterior que desarrollemos una serie de clases entre ellas una abstracta que sera la superclase de las otras. Lo primero es desarrollar la clase Fighter que sera la superclase abstract, luego haremos el resto de clase que en general contendran lo mismo exepto por la clase Pokemon que tendra un atributo extra (type) como en la practica anterior. En este ejercicio se pide utilizar los principios SOLID vistos en clase, mas especificamente Single Responsability y Open-Closed, a mi personalmente se me hizo complicado debido a que en la practica anterior yo entendia que la clase Pokedex era en realidad Pokemon por lo que no hice ningun tipo de contenedor de pokemon. Las clases son muy parecidas ya que simplemente hay que adaptarlas un poco a los casos especificos de cada tipo de universo, por eso pienso que con 3 universos (Pokemon,Dragon Ball y Digimon) es suficiente para demostrar el funcionamiento de las clases.

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

[Ejercicio-1](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-Nitro1000/tree/main/src/ejercicio-1)

---------------------

### Ejercicio 2<a name="E2"></a>
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

[Ejercicio-2](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-Nitro1000/tree/main/src/ejercicio-2)

---------------------

### Ejercicio 3<a name="E4"></a>
En este ejercicio se nos pide trabajar con interfaces genericas y con clases. Se implementa una interfaz *Streamable* que tendra unos metodos utiles para poder trabajar con las emisiones, por ejemplo tendremos metodos para añadir emisiones al contenedor de emisisones, para saber cuantas emisiones hay y para obtener un objeto tipo T generico. Se crea un interfaz que contiene el metodo de busqueda y esta es una extención de la interfaz anterior, con dicho metodo podremos realizar las busquedas por ejemplo por titulo o año, entre otros. Luego se definio una clase generica abstracta *BasicStreamableCollection* donde implementaremos los metods de la interfaz y la extendemos para las subclases de las colecciones qu se nos pide: series, películas y documentales.

A continuación se muestra el spec correspondiente a este ejercicio.

```typescript
import 'mocha';
import { expect } from 'chai';
import { Series } from '../src/ejercicio-3/series';
import { DocumentaryFilm } from '../src/ejercicio-3/documentaryfilm';
import { Movie } from '../src/ejercicio-3/movie';


describe('DSIflix', () => {
  const CollectFilms = new Movie([
    { title: 'Titulo1', year: 2010, genero: 'ficcion' },
    { title: 'Titulo2', year: 2005, genero: 'anime' },
    { title: 'Titulo3', year: 1999, genero: 'terror' },
  ]);

  const CollectSeries = new Series([
    { title: 'Serie1', year: 2005, genero: 'drama' },
    { title: 'Serie2', year: 2017, genero: 'accion' },
    { title: 'Serie3', year: 2021, genero: 'ranime' },
  ]);

  const CollectDoc = new DocumentaryFilm([
    { title: 'Documental1', year: 2015, genero: 'ficcion' },
    { title: 'Documental2', year: 2006, genero: 'naturaleza' },
  ]);

  describe('Pruebas de peliculas', () => {
    it('Buscando películas por titulo', () => {
      expect(CollectFilms.search('titulo', 'Titulo1').join(' ')).to.be.equal([{ titulo: 'Titulo1', año: 2002, genero: 'ficcion' }].join(' '));
    });
    it('Buscando películas por año', () => {
      expect(CollectFilms.search('año', '2005').join(' ')).to.be.equal([{ titulo: 'Titulo2', año: 2005, genero: 'accion' }].join(' '));
    });
    it('Buscando películas por genero', () => {
      expect(CollectFilms.search('genero', 'terror').join(' ')).to.be.equal([{ titulo: 'Titulo3', año: 2020, genero: 'terror' }].join(' '));
    });
    it('Numero de peliculas', () => {
      expect(CollectFilms.getNumEmissions()).to.be.equal(3);
    });
  });

  describe('Pruebas de Series', () => {
    it('Buscando series por titulo', () => {
      expect(CollectSeries.search('titulo', 'Serie1').join(' ')).to.be.equal([{ titulo: 'Serie1', año: 2002, genero: 'drama' }].join(' '));
    });
    it('Buscando series por año', () => {
      expect(CollectSeries.search('año', '2017').join(' ')).to.be.equal([{ titulo: 'Serie2', año: 2017, genero: 'accion' }].join(' '));
    });
    it('Buscando series por genero', () => {
      expect(CollectSeries.search('genero', 'drama').join(' ')).to.be.equal([{ titulo: 'Serie1', año: 2002, genero: 'drama' }].join(' '));
    });
  });

  describe('Pruebas de Documentales', () => {
    it('Buscando documentaless por titulo', () => {
      expect(CollectDoc.search('titulo', 'Documental1').join(' ')).to.be.equal([{ titulo: 'Documental1', año: 2002, duration: 120, genero: 'ficcion' }].join(' '));
    });
    it('Buscando documentales por año => no la encuentra', () => {
      expect(CollectDoc.search('año', '2018').join(' ')).not.to.be.equal([{ titulo: 'Documental2', año: 2018, duration: 140, genero: 'accion' }].join(' '));
    });
  });
});

```
Las clases son las siguientes:

[Ejercicio-3](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-Nitro1000/tree/main/src/ejercicio-3)


---------------------


## Coveralls<a name="coveralls"></a>
Lo primero que tenemos que hacer es instalar las dependencias que se encesitan para integrar los informes que genera *Istanbul* sobre el cubrimiento del codigo a partir de las pruebas llevadas a cabo con *Mocha* y *Chai* con la herramienta *Coveralls* para eso usamos el siguiente comando `$ npm install --save-dev nyc coveralls` y seguidamente nos vamos al fichero *package.json* y agregamos el script *"coverage":"nyc npm test"*. Hecho esto ahora creamos el fichero *.coveralls.yml* y añadimos el token que nos da coveralls en su pagina.


---------------------


## Conclusión<a name="conclu"></a>

Esta practica puso en practica mis conocimientos de construcción de clases y gracias a esto pude hacerlas mejor de tal forma que en esta practica creo que mejore respecto a las anteriores en el sentido de pensar mas en la herencia y encapsulamiento. Por otra parte aprendi a utilizar las clases genericas lo que es muy interesante ya que son de mucha ayuda a la hora de desarrollar. Las principales dificultades fue entender los enunciados porque ya que en la anterior practica la hice de una forma equivocada mas especifico en el ejercicio-1, pero en esta creo que si logre entender todo lo que se me pedia y hacerlo bien y por eso en el ejercicio-1 tuve el problema de que hice la clase Pokedex desde cero. El resto de ejercicios no representaron muchos dificultades mas alla del planteamiento y busqueda de información. Por ultimo en esta practica empezamos a trabajar con *Coveralls* que es una herramienta muy interesante que nos permite llevar un seguimiento de los cambios del cubrimiento del codigo a lo largo del desarrollo del proyecto.

---------------------

## Bibliografía <a name="biblio"></a>

- [TypeDoc](https://typedoc.org/)
- [Mocha](https://mochajs.org/) 
- [Chai](https://www.chaijs.com/)
- [Istanbul](https://istanbul.js.org/)
- [Coveralls](https://istanbul.js.org/)
- [Guión de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct06-generics-solid/)