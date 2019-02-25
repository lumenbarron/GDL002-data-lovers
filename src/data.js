// Searching for the name of Pokemon
const searchNamePokemon = (nameInput)=> {
  let namePokemon = "";
    POKEMON.pokemon.find( obj => { 
      if (obj.name.toLowerCase() === nameInput){
     namePokemon = (obj) //obtenemos un objeto
    };
  }); 
  console.log(namePokemon);
  return namePokemon;
  };


// Searching for the type of Pokemon
const typePokemonGrass = ( nameType ) => {
  let typePokemon = POKEMON.pokemon
    .filter( obj => obj.type[0] === nameType || obj.type[1] === nameType )//obtemos un array mas pequeño con objetos
    console.log(typePokemon);
    
    return typePokemon;
};

  
// Print all the pokemon
const catalogPokemon = () => {
  allPokemon.forEach( obj => {
    console.log (obj); //obtenemos 151 objeto
  } )  
  };

window.dataLovers = {
  catalogPokemon,
  searchNamePokemon
}
