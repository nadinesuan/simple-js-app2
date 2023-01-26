let pokemonList = [
    { name: "Bulbasaur", height: 0.7, types: ['grass', 'poison'] },
    { name: "Charizard", height: 1.7, types: 'fire'},
    { name: "Squirtle", height: 0.5, types: 'water'},
    { name: "Wigglytuff", height: 1, types: 'fairy'}
];

for (let i=0; i < pokemonList.length; i++) {
    document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")")
if (pokemonList[i].height >= 1.0) {
    document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + " - Wow, that's a big pokemon!");
    }
}