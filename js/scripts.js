let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    function getAll() {
        return pokemonList
    }

    function add(pokemon) {
    if (
        typeof pokemon === "object" &&
        "name" in pokemon
    ) {
        pokemonList.push(pokemon);
    } else {
        console.log('Invalid Pokémon');
    }
}

function addListItem (pokemon) {
    let pokemonList = document.querySelector(".pokemon-List");
    let listPokemon = document.createElement('li');
    pokemonList.classList.add('list-group-item');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    pokemonButton.classList.add('btn');
    pokemonButton.setAttribute('data-toggle', 'modal');
    pokemonButton.setAttribute('data-target', '#pokemonModal');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener("click", function(Event) {
        showDetails(pokemon);
    });

function loadList() {
    return fetch(apiUrl).then (function (response) {
        return response.json();
    }).then (function (json) {
        json.results.forEach(function (item) {
            let pokemon = {
                name: item.name,
                detailsUrl: item.url
            };
            add(pokemon);   
        });
    }) .catch(function (e) {
        console.error (e);
    })
}

function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (details) {
        item.imageUrl = details.sprites.font_default;
        item.height = details.height;
        item.types = details.types;
    }).catch(function (e) {
        console.error(e);
    });
}

function showModal (item) {
    pokemonRepository.loadDetails(item).then (function () {
        
        let pokemonImage = document.querySelector ('pokemon-image');

        let pokemonId = document.querySelector('pokemon-id');
        pokemonId.innerText = '#' + item.id;

        let pokemonName = document.querySelector('.pokemon-name');
        pokemonName.innerText = item.name;

        let pokemonHeight = document.querySelector('.pokemon-height');
        pokemonHeight.innerText = '> ' + (item.height/10) + ' m';

        let itemTypes = "";
        item.types.forEach(function(types) {
            itemTypes += ["<li>" + types.type.name + "</li>"];
        });
        let pokemonTypes = document.querySelector('.pokemon-types');
        pokemonTypes.innerHTML = itemTypes;
    
return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    };
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon)
    });
});
