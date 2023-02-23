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

    }
}

function addListItem (pokemon) {
    let pokemonList = document.querySelector(".pokemon-List");
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener("click",
    function(Event) {
        showDetails(pokemon);
    });
}

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

function showDetails (item) {
    pokemonRepository.loadDetails(item).then (function () {
        console.log(item);
        let modalContainer = document.querySelector ('#modal-container');

            modalContainer.innerHTML = '';

            let modal = document.createElement('div');
            modal.classList.add ('modal');

            let sprite = document.createElement('img');
            sprite.classList.add ('sprite');
            sprite.src = item.imageUrl;

            let closeButtonElement = document.createElement ('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'X';
            closeButtonElement.addEventListener ('click', hideModal)

            let titleElement = document.createElement ('h1');
            titleElement.innerText = (item.name);

            let contentElement = document.createElement ('p');
            contentElement.innerText = ('Height: ' + item.height + '\n' + '\n' + 'Types: ' + item.types);



            modal.appendChild (closeButtonElement);
            modal.appendChild (titleElement);
            modal.appendChild (contentElement);
            modalContainer.appendChild (modal);
            modal.appendChild (sprite);


            modalContainer.classList.add('is-visible');


        function hideModal (){
            modalContainer.classList.remove ('is-visible');
        }

        window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
            hideModal();
        }  
        });

        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });

        document.querySelector ('button.button-class').addEventListener('click', () => {
            showDetails ('Modal Title', 'Modal Content');
        });

    });

}

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
        pokemonRepository.addListItem(pokemon);
    });
});
