// Searching for the name of Pokemon
const searchNamePokemon = (nameInput)=> {
  let namePokemon = "";
    POKEMON.pokemon.find( obj => { 
      if (obj.name.toLowerCase() === nameInput){
     namePokemon = (obj) //obtenemos un objeto
    };
  }); 
  return namePokemon;
  };


// Searching for the type of Pokemon
const typePokemon = ( nameType ) => {
  let typePokemon = POKEMON.pokemon
    .filter( obj => obj.type[0] === nameType || obj.type[1] === nameType )//obtemos un array mas pequeño con objetos
    return typePokemon;
};

sortID = "a-z"
const orderPokemonAlfb = ( typePokemon, sortID) => {
  console.log("si funciona ");
  console.log(typePokemon);
if (sortID == "a-z") {
  return typePokemon.sort( function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
  if (a.name < b.name) {
      return -1;  
} 
  return 0
    )

};
document.getElementById("orderPokemon").addEventListener("click",  orderPokemonAlfb );




// Print all the pokemon
const catalogPokemon = () => {
 
};


window.dataLovers = {
  
  searchNamePokemon
}
