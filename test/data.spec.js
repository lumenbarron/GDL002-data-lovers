require('../src/data.js');
const POKEMON = require("../src/data/pokemon/pokemon.json");


describe ("POKEMON", () => {
  it("should be an object", () => {
    //console.log(pokemon);
    expect(typeof POKEMON).toBe("object");
  });
});


describe('searchNamePokemon', () => {
  it('is a function', () => {
    expect(typeof(dataLovers.searchNamePokemon)).toBe('function');
  });
});


describe ("averagePokemonCandy", () => {
  it( "it should return a number", () => {
    expect (dataLovers.averagePokemonCandy()).toBe (57.3);
  });
});

 /* it('returns a object', () => {
    expect(dataLovers.searchNamePokemon("Pikachu")).toBe("object");
  });*/

