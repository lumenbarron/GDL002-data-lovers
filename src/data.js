let allPokemon = POKEMON.pokemon
let msj = "Tangela"
let numberInput = "002"
console.log("holi vamos bien")
 
/* function searchPokemon (allPokemon, msj ) {
  for (let i = 0; i< allPokemon.length; i++) {
  let pokemon = allPokemon[i];
  if (pokemon.name === msj){
    console.log(pokemon)
    return pokemon.name
  }
      }
}*/
// Searching for the name of Pokemon
const searchPokemon = () => {
  allPokemon.forEach( obj => {
    //console.log (obj.name)
    if (obj.name == msj) {
        console.log(obj.name)
       } else {
        console.log("no es un pokemon")
      }
  } )
  
  };

  // Searching for the type of Pokemon
    //Type Grass
const typePokemonGrass = () => {
  let typePokemon = allPokemon.filter( obj => obj.type[0] === "Grass" || obj.type[1] === "Grass" );
  console.log(typePokemon);
}

const typePokemonPoison = () => {
  let typePokemon = allPokemon.filter( obj => obj.type[0] === "Poison" || obj.type[1] === "Poison" );
  console.log(typePokemon);
}

// Searching for the number of Pokemon
const searchNumberPokemon = () => {
  let numPokemon = allPokemon.find( function (obj){
    if (obj.num === numberInput){
      console.log(obj.num)
    };
  
  }); 
  
};


"Grass"
"Poison"
"Fire"
"Flying"
"Water"
"Bug"
"Normal"
"Electric"
"Ground"
"Fighting"
"Psychic"
"Rock"
"Ice"
"Ghost"
"Dragon"


window.dataLovers = {
  searchPokemon,
}


  

