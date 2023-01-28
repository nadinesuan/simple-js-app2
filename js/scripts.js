let pokemonList = [
    { name: "Bulbasaur", height: 0.7, types: ['grass', 'poison'] },
    { name: "Charizard", height: 1.7, types: 'fire'},
    { name: "Squirtle", height: 0.5, types: 'water'},
    { name: "Wigglytuff", height: 1, types: 'fairy'}
];

/* before the forEach loop
for (let i=0; i < pokemonList.length; i++) {
    document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")")
if (pokemonList[i].height >= 1.0) {
    document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + " - Wow, that's a big pokemon!");
    }
}
*/

//replacing for loop with forEach loop
pokemonList.forEach(function(pokemon) {
    if (pokemon.height >= 1.0) {
        document.write(pokemon.name + " (height: " + pokemon.height + "m) - Wow, that's a big pokemon! + "<br>");
    } else if (pokemon.height >= 0.7 && pokemon.height < 1.0) {
        document.write(pokemon.name + " (height: " + pokemon.height + "m) - Wow, that's a medium pokemon! + "<br>");
    } else { 
        document.write(pokemon.name + " (height: " + pokemon.height + "m) - Wow, that's a small pokemon! + "<br>");
    }
});
