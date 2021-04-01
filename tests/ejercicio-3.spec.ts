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
