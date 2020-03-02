
// #region 
const API_URL = 'https://starwars.egghead.training/';
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
output.innerText = "Loading...";
// #endregion

function getFilmTitles(films) {
    return films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`)
    .join('\n');
}

fetch(API_URL + 'films1') // endpont doesn't exsit
.then(
    function(response) {
     if(!response.ok) {
         throw Error('Unsuccessful response');
     }
    return response.json()
        .then(function(films) {
            output.innerText = getFilmTitles(films);
        })
})

//#region 
// if doing this way, catch will not be run
// because error will be catch by the reject handler
// .then(
//     function() {
//         spinner.remove();
//     },
//     function() {
//         spinner.remove();
//     }
// )
//#endregion
.catch(function(error) {
    console.warn(error);
    output.innerText = ":(";
    throw new Error("...")
})
//#region 
// in this way, will duplicate the logic:
// .then(
//     function() {
//         spinner.remove();
//     },
//     function() {
//         spinner.remove();
//     }
// )
//#endregion

//#region 
// finally will excute whaterever fullfill or reject
.finally(function() {
    spinner.remove();
})
// still will run, after finally, 
// .then(function (films) {
//     console.log(films) // if no endpint, will be undefined
// })
//#endregion





