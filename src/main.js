//----------For print pokemon´s search ---------------------//
const searchResult = () =>{
    let nameInput = document.getElementById("inputNamePokemon").value.toLowerCase(); 
    let pokemonImput = dataLovers.searchNamePokemon(nameInput, POKEMON.pokemon);
    document.getElementById("searchResult").innerHTML = "Hola! Mi nombre es "
    + pokemonImput.name + ", soy un pokemon tipo " + pokemonImput.type 
    + "; mi peso es " + pokemonImput.weight + " y mido " + pokemonImput.height + 
    ". Mi principal debilidad son pokemones de tipo " + pokemonImput.weaknesses + ". ¡Es un gusto conocerte!";
    document.getElementById("imgImput").src = pokemonImput.img;
};

document.getElementById("searchName").addEventListener("click", searchResult);

//----------For print type pokemon selection ---------------------//
let resultTypePokemonPrint;
const typePokemonPrint = (nameTypeClass) => {
   resultTypePokemonPrint = dataLovers.typePokemonName( nameTypeClass ,POKEMON.pokemon);
    resultTypePokemonPrint.map(element => { element;
        const markup = `
            <div class="type">
            <h2 id="nameElement"> ${element.name} </h2>
            <p>
            <img id="imageElement" src="${element.img}">
            </p>
            </div>
            `;
            document.getElementById("resultByType").innerHTML += markup;
            return resultTypePokemonPrint;  
    });
};

//----------For print pokemon´s sort for the type ---------------------//
const sortPokemonPrint = () => {
    let resultSortPokemonPrint = dataLovers.orderPokemonAlfb(resultTypePokemonPrint );
    resultSortPokemonPrint.map(element => { element;
        const markup = `
            <div class="type">
            <h2> ${element.name} </h2>
            <p>
            <img id="imageElement" src="${element.img}">
            </p>
            </div>
            `;
            document.getElementById("resultByTypeSort").innerHTML += markup;
    });
};

document.getElementById("orderPokemon").addEventListener("click", sortPokemonPrint);

//----------For print average of candys pokemon ---------------------//
const printAverage = () => {
    let result = dataLovers.averagePokemonCandy(POKEMON.pokemon);
    document.getElementById("averageresult").innerHTML = "...Los pokemon necesitan candys para evolucionar?, el promedio de estos es  " + result;
};
document.getElementById("average").addEventListener("click",printAverage);


//----------Elements for the HTML---------------------//

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
 
