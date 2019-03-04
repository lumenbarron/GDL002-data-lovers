
// Searching for the name of Pokemon
const searchNamePokemon = (nameInput, data)=> {
  let namePokemon = "";
    data.find( obj => { 
      if (obj.name.toLowerCase() === nameInput.toLowerCase()){
     namePokemon = (obj); 
    }
  });
  return namePokemon;
  };


// Searching for the type of Pokemon
const typePokemonName = ( nameType, data ) => {
  let typePokemon = data
    .filter( obj => obj.type[0] === nameType || obj.type[1] === nameType );
    //console.log(JSON.stringify(typePokemon));
    return typePokemon;
};

//sortID = "a-z"
const orderPokemonAlfb = ( pokemonSorter) => {
  let sorter = pokemonSorter.sort((a,b) => {
    if (a.name > b.name ){
        return 1;
     } if (a.name < b.name ) {
        return -1;
    } 
  });
    return sorter;
};

//Function to know the average of candy count of all of pokemon (data)
const averagePokemonCandy = (data) => {
  let allPokemon = data
  .filter(obj => obj.candy_count)
  .map( obj => obj.candy_count);
  let reducePokemon = allPokemon.reduce ((accumulator, currentValue) => accumulator + currentValue);
  let average = reducePokemon/allPokemon.length;
 console.log(typeof(average));
 return average;
};




window.dataLovers = {
   searchNamePokemon: searchNamePokemon,
   typePokemonName: typePokemonName ,
   orderPokemonAlfb: orderPokemonAlfb,
   averagePokemonCandy: averagePokemonCandy
};
