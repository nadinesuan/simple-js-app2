let pokemonRepository = (function () {
    let pokemonList = [
    { name: "Bulbasaur", height: 0.7, types: ['grass', 'poison'] },
    { name: "Charizard", height: 1.7, types: 'fire'},
    { name: "Squirtle", height: 0.5, types: 'water'},
    { name: "Wigglytuff", height: 1, types: 'fairy'},
]

function add(pokemon) {
    pokemonRepository.push(pokemon);
}

function getAll() {
    return pokemonList;
}

function addListItem (pokemon) {
let pokemonRepository = document.querySelector('.pokemon-List'); 
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(listPokemon);
    button.addEventListener("click", (Event) => showDetails(pokemon));
}

function showDetails (pokemon) {
    console.log(pokemon);
}

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    };
})();

pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});
