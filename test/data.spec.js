require('../src/data.js');
const pokemon = require ("../src/data/pokemon/pokemon.json");

describe ("POKEMON", () => {
  it("should be an object", () => {
    expect (typeof pokemon).toBe("object");
  });
});



/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
}); */
