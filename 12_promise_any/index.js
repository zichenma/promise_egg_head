
// #region 
const API_URL_1 = 'https://starwars.egghead.training/';
const API_URL_2 = 'https://swapi.mariusschulz.com';
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
// #endregion

function getFilmTitles(films) {
    return films
    .slice()
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`)
    .join('\n');
}



// Promise.any fifilled (will get the FIRST filflled value) when any of promise fifilled
// and reject if  all promises are rejected

function queryAPI(endpoint) {
    return Promise.any([
        query(API_URL_1, endpoint),
        query(API_URL_2, endpoint)
    ]).catch(() => {
        return Promise.reject(
            Error(`Failed to fetch endpoint ${endpoint}`)
        )
    });
}

function query(rootURL, endpoint) {
    return fetch(rootURL + endpoint).then(response => {
        return response.ok
            ? response.json()
            : Promise.reject(Error("Unsuccessful response"));
    });
}

queryAPI('films')
.then(filems => {
    output.innerText = getFilmTitles(filems);
}).catch(error => {
    console.warn(error);
    output.innerText = ":(";
})
.finally(() => {
    spinner.remove()
})



