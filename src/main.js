const searchResult = () =>{
    let nameInput = document.getElementById("inputNamePokemon").value.toLowerCase(); 
    let pokemonImput = searchNamePokemon(nameInput);
    document.getElementById("searchResult").innerHTML = "Hola! Mi nombre es " + pokemonImput.name + ",soy un pokemon tipo " + pokemonImput.type 
    + " mi principal debilidad son pokemones de tipo " + pokemonImput.weaknesses ;
    document.getElementById("imgImput").src = pokemonImput.img;
};

document.getElementById("searchName").addEventListener("click", searchResult);
  

const typePokemonPrint = (nameTypeClass) => {
    console.log("pokemon filtrado");
    
    let resultTypePokemonPrint = typePokemon( nameTypeClass );
    resultTypePokemonPrint.map(element => { element
        const markup = `
            <div class="type">
            <h2> ${element.name} </h2>
            <p>
            <img class="bio" src="${element.img}">
            </p>
            </div>
            `;
            document.getElementById("resultByType").innerHTML += markup;
            console.log (resultTypePokemonPrint);
            //return resultTypePokemonPrint;
        
    })
    orderPokemonAlfb ( resultTypePokemonPrint );
};

document.getElementById("filterhByTypeGrass").addEventListener("click", function () { typePokemonPrint ("Grass"); });
document.getElementById("filterhByTypeWater").addEventListener("click", function () { typePokemonPrint ("Water"); });
document.getElementById("filterhByTypePoison").addEventListener("click", function () { typePokemonPrint ("Poison"); });
document.getElementById("filterhByTypeFire").addEventListener("click", function () { typePokemonPrint ("Fire"); });
document.getElementById("filterhByTypeFlying").addEventListener("click", function () { typePokemonPrint ("Flying"); });
document.getElementById("filterhByTypeBug").addEventListener("click", function () { typePokemonPrint ("Bug"); });
document.getElementById("filterhByTypeNormal").addEventListener("click", function () { typePokemonPrint("Normal"); });
document.getElementById("filterhByTypeGround").addEventListener("click", function () { typePokemonPrint ("Ground"); });
document.getElementById("filterhByTypeFighting").addEventListener("click", function () { typePokemonPrint ("Fighting"); });
document.getElementById("filterhByTypePsychic").addEventListener("click", function () { typePokemonPrint ("Psychic"); });
document.getElementById("filterhByTypeRock").addEventListener("click", function () { typePokemonPrint ("Rock"); });
document.getElementById("filterhByTypeIce").addEventListener("click", function () { typePokemonPrint ("Ice"); });
document.getElementById("filterhByTypeGhost").addEventListener("click", function () { typePokemonPrint ("Ghost"); });
document.getElementById("filterhByTypeDragon").addEventListener("click", function () { typePokemonPrint ("Dragon"); });
document.getElementById("filterhByTypeElectic").addEventListener("click", function () { typePokemonPrint ("Electric"); });
 
