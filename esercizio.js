console.log('pagina due funziona')

const nintendoGames = [
    {
        title: "The Legend of Zelda: Breath of the Wild",
        platform: ["Nintendo Switch", "Wii U"],
        genre: ["Action-Adventure", "Open World"],
        releaseYear: 2017,
        developer: "Monolith Soft, Nintendo EPD",
        isMultiplayer: false,
        rating: 97,
        priceUSD: 54.99,
        isExclusive: true
    },
    {
        title: "Super Mario Odyssey",
        platform: ["Nintendo Switch"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2017,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 97,
        priceUSD: 52.99,
        isExclusive: true
    },
    {
        title: "Animal Crossing: New Horizons",
        platform: ["Nintendo Switch"],
        genre: ["Life Simulation", "Social Simulation"],
        releaseYear: 2020,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 90,
        priceUSD: 51.99,
        isExclusive: true
    },
    {
        title: "Metroid Dread",
        platform: ["Nintendo Switch"],
        genre: ["Action-Adventure", "Platform"],
        releaseYear: 2021,
        developer: "MercurySteam, Nintendo EPD",
        isMultiplayer: false,
        rating: 88,
        priceUSD: 22.99,
        isExclusive: true
    },
    {
        title: "Splatoon 3",
        platform: ["Nintendo Switch"],
        genre: ["Shooter", "Action"],
        releaseYear: 2022,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 83,
        priceUSD: 23.99,
        isExclusive: true
    },
    {
        title: "Pokémon Scarlet and Violet",
        platform: ["Nintendo Switch"],
        genre: ["RPG", "Adventure"],
        releaseYear: 2022,
        developer: "Game Freak",
        isMultiplayer: true,
        rating: 72,
        priceUSD: 28.99,
        isExclusive: true
    },
    {
        title: "Super Smash Bros. Ultimate",
        platform: ["Nintendo Switch"],
        genre: ["Fighting", "Action"],
        releaseYear: 2018,
        developer: "Bandai Namco Studios, Sora Ltd.",
        isMultiplayer: true,
        rating: 93,
        priceUSD: 10.99,
        isExclusive: true
    },
    {
        title: "Mario Kart 8 Deluxe",
        platform: ["Nintendo Switch"],
        genre: ["Racing", "Party"],
        releaseYear: 2017,
        developer: "Nintendo EAD",
        isMultiplayer: true,
        rating: 92,
        priceUSD: 40.99,
        isExclusive: true
    },
    {
        title: "Fire Emblem: Three Houses",
        platform: ["Nintendo Switch"],
        genre: ["Tactical RPG", "Strategy"],
        releaseYear: 2019,
        developer: "Intelligent Systems, Koei Tecmo",
        isMultiplayer: false,
        rating: 89,
        priceUSD: 34.99,
        isExclusive: true
    },
    {
        title: "Luigi’s Mansion 3",
        platform: ["Nintendo Switch"],
        genre: ["Action-Adventure", "Puzzle"],
        releaseYear: 2019,
        developer: "Next Level Games",
        isMultiplayer: true,
        rating: 86,
        priceUSD: 9.99,
        isExclusive: true
    },
    {
        title: "Donkey Kong Country: Tropical Freeze",
        platform: ["Nintendo Switch", "Wii U"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2018,
        developer: "Retro Studios",
        isMultiplayer: true,
        rating: 20,
        priceUSD: 56.99,
        isExclusive: true
    },
    {
        title: "Xenoblade Chronicles 3",
        platform: ["Nintendo Switch"],
        genre: ["RPG", "Action"],
        releaseYear: 2022,
        developer: "Monolith Soft",
        isMultiplayer: false,
        rating: 89,
        priceUSD: 33.99,
        isExclusive: true
    },
    {
        title: "Kirby and the Forgotten Land",
        platform: ["Nintendo Switch"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2022,
        developer: "HAL Laboratory",
        isMultiplayer: true,
        rating: 85,
        priceUSD: 99.99,
        isExclusive: true
    },
    {
        title: "Bayonetta 3",//
        platform: ["Nintendo Switch"],
        genre: ["Action", "Hack and Slash"],
        releaseYear: 2022,
        developer: "PlatinumGames",
        isMultiplayer: false,
        rating: 87,
        priceUSD: 78.99,//
        isExclusive: true
    }
]


function renderGameList(games) {

    const gameCont = document.getElementById('game-container');
    gameCont.innerHTML = '';

    for (const game of games) {

        const gameCard = document.createElement('div');
        gameCard.classList.add("carte");


        const titleSpan = document.createElement('p');
        titleSpan.appendChild(document.createTextNode('\n nome: ' + game.title +"   \n"));
        gameCard.appendChild(titleSpan);
        
        
        const platSpan = document.createElement('p');
        platSpan.appendChild(document.createTextNode('piattaforma: ' + game.platform.join(" , ")));
        gameCard.appendChild(platSpan);
        
        const genreSpan = document.createElement('p');
        genreSpan.appendChild(document.createTextNode('genere: ' + game.genre.join(" , ")));
        gameCard.appendChild(genreSpan);

        const releseSpan = document.createElement('p');
        releseSpan.appendChild(document.createTextNode('rilascio: ' + game.releaseYear));
        gameCard.appendChild(releseSpan);


        const devSpan = document.createElement('p');
        devSpan.appendChild(document.createTextNode('sviluppatori: ' + game.developer));
        gameCard.appendChild(devSpan);


        const mulSpan = document.createElement('p');
        mulSpan.appendChild(document.createTextNode('multiplayer' + game.isMultiplayer));
        gameCard.appendChild(mulSpan);

        const ratSpan = document.createElement('p');
        ratSpan.appendChild(document.createTextNode('Valutazione: ' + game.rating));
        gameCard.appendChild(ratSpan);
        

        const priceSpan = document.createElement('p');
        priceSpan.appendChild(document.createTextNode('price: $' + game.priceUSD));
        gameCard.appendChild(priceSpan);

        const exSpan = document.createElement('p');
        exSpan.appendChild(document.createTextNode('Esclusiva: ' + game.isExclusive));
        gameCard.appendChild(exSpan);

        gameCont.appendChild(gameCard);

    }
}


renderGameList(nintendoGames);


const orderTitleBtn = document.getElementById('title-order');

function compareTitles(g1, g2){
    return g1.title.localeCompare(g2.title);
}

function orderGamesByTitle(){

    nintendoGames.sort(compareTitles);

    renderGameList(nintendoGames);

}

orderTitleBtn.addEventListener('click', orderGamesByTitle);

const orderPrice = document.getElementById('price-order');


function compareprice(g1, g2){
    return g2.priceUSD -g1.priceUSD;
}
function orderGamesByPrice(){

    nintendoGames.sort(compareprice);

    renderGameList(nintendoGames);

}
orderPrice.addEventListener('click', orderGamesByPrice);
s

const orderRating = document.getElementById('rating-order');


function compareRating(g1, g2){
    return g2.rating -g1.rating;
}
function orderGamesByRating(){

    nintendoGames.sort(compareRating);

    renderGameList(nintendoGames);

}
orderRating.addEventListener('click', orderGamesByRating);




/// aggiungere l'ordinamento per prezzo (dal più economico al più caro)
/// aggiungere l'ordinamento per rating (dal rating migliore al peggiore)




/// completare le schede dei giochi rendendole molto belle! (con tutte le proprietà)
