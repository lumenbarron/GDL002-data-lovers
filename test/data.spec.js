require('../src/data.js');
const pokemon = require("../src/data/pokemon/pokemon.json");
const pikachu = require("../src/data/pokemon/mocks/pikachu.json");
const dragon = require("../src/data/pokemon/mocks/dragon.json");
const dragonSort = require("../src/data/pokemon/mocks/dragonSort.json");

/* Test for know if pokemon is a object*/
describe ("POKEMON", () => {
  it("should be an object", () => {
    expect(typeof pokemon).toBe("object");
  });
});

/* Test for Search by pokemon´s name function*/
describe('searchNamePokemon', () => {
  it('should be a function', () => {
    expect(typeof(dataLovers.searchNamePokemon)).toBe('function');
  });

  it("should return an object when i search 'Pikachu' ", () => {
    expect(typeof dataLovers.searchNamePokemon("pikachu", pokemon.pokemon)).toBe('object');
  });

  it("should return an object with Pikachu information when i search 'Pikachu' ", () => {
    expect(dataLovers.searchNamePokemon("pikachu", pokemon.pokemon)).toEqual(pikachu);
  });
});

/* Test for select by pokemon´s type function*/
describe('typePokemonName', () => {
  it('should be a function', () => {
    expect(typeof(dataLovers.typePokemonName)).toBe('function');
  });

  it("should return an array when i search 'Botton Dragon' ", () =>{
    expect(typeof dataLovers.typePokemonName("Dragon", pokemon.pokemon)).toBe('object');
  });

  it("should return an array with Dragon type information when i click on the botton dragon  ", () => {
    expect(dataLovers.typePokemonName("Dragon", pokemon.pokemon)).toEqual(dragon);
  });
});

/* Test for Sort by pokemon´s type function*/
describe('orderPokemonAlfb', () => {
  it('should be a function', () => {
    expect(typeof(dataLovers.orderPokemonAlfb)).toBe('function');
  });

 it("should return an array when i sort dragon types pokemon", () =>{
    expect(typeof dataLovers.orderPokemonAlfb(dragon)).toBe('object');
  });

   it("should return an array in order alphabetic information with Dragon type  when i click on the botton ordenar  ", () => {
    expect(dataLovers.orderPokemonAlfb(dragon)).toEqual(dragonSort);
  });
});


/* Test for the average function*/
describe('averagePokemonCandy', () => {
  it('should be a function', () => {
    expect(typeof(dataLovers.averagePokemonCandy)).toBe('function');
  });
  it( "should return a number", () => {
    expect (dataLovers.averagePokemonCandy(pokemon.pokemon)).toBe (57.3);
  });
});

