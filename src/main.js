const searchResult = () =>{
    let nameInput = document.getElementById("inputNamePokemon").value.toLowerCase(); 
    let pokemonImput = searchNamePokemon(nameInput);
    document.getElementById("searchResult").innerHTML = "Hola! Mi nombre es " + pokemonImput.name + ",soy un pokemon tipo " + pokemonImput.type 
    + " mi principal debilidad son pokemones de tipo " + pokemonImput.weaknesses ;
    document.getElementById("imgImput").src = pokemonImput.img;
};

document.getElementById("searchName").addEventListener("click", searchResult);
  

const borrar =() => {
    document.getElementById("resultByTypeGrass").value="";
};

document.getElementById("filterhByTypeGrass").addEventListener("click", borrar );

const typeGrass = (nameTypeClass) => {
    console.log(nameTypeClass);
    let resultTypeGrass = typePokemonGrass( nameTypeClass );
    for (let i = 0; i < resultTypeGrass.length; i++) {
      const element = resultTypeGrass[i];
      console.log(element);
      const markup = `
        <div class="type">
        <h2> ${element.name} </h2>
        <p>
        <img class="bio" src="${element.img}">
        </p>
         </div>
        `;
         document.getElementById("resultByTypeGrass").innerHTML+=markup;
    }
}

document.getElementById("filterhByTypeGrass").addEventListener("click", function () { typeGrass ("Grass"); });
document.getElementById("filterhByTypeWater").addEventListener("click", function () { typeGrass ("Water"); });
document.getElementById("filterhByTypePoison").addEventListener("click", function () { typeGrass ("Poison"); });
document.getElementById("filterhByTypeFire").addEventListener("click", function () { typeGrass ("Fire"); });
document.getElementById("filterhByTypeFlying").addEventListener("click", function () { typeGrass ("Flying"); });
document.getElementById("filterhByTypeBug").addEventListener("click", function () { typeGrass ("Bug"); });
document.getElementById("filterhByTypeNormal").addEventListener("click", function () { typeGrass ("Normal"); });
document.getElementById("filterhByTypeGround").addEventListener("click", function () { typeGrass ("Ground"); });
document.getElementById("filterhByTypeFighting").addEventListener("click", function () { typeGrass ("Fighting"); });
document.getElementById("filterhByTypePsychic").addEventListener("click", function () { typeGrass ("Psychic"); });
document.getElementById("filterhByTypeRock").addEventListener("click", function () { typeGrass ("Rock"); });
document.getElementById("filterhByTypeIce").addEventListener("click", function () { typeGrass ("Ice"); });
document.getElementById("filterhByTypeGhost").addEventListener("click", function () { typeGrass ("Ghost"); });
document.getElementById("filterhByTypeDragon").addEventListener("click", function () { typeGrass ("Dragon"); });
document.getElementById("filterhByTypeElectic").addEventListener("click", function () { typeGrass ("Electric"); });
 
