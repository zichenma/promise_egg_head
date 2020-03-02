
const API_URL = 'https://starwars.egghead.training/';
const output = document.getElementById("output");
const spinner = document.getElementById("spinner")

function queryAPI(endpoint) {
    return fetch(API_URL + endpoint).then(response => {
        return response.ok
            ? response.json()
            : Promise.reject(Error("Unsuccessful response"));
    });
}

// Promise.all combine all promises to one promise
// each promise excute at the same time
// good for the promises are not depended to each other

const promise = Promise.all([
    queryAPI('films'),
    queryAPI('planets'),
    queryAPI('species')
])
// [films, planets] must be the same order as Promise.all 2 queryAPI
promise.then(([films, planets, species]) => {
    output.innerText = 
    `${films.length} films, ` + 
    `${planets.length} planets ` +
    `${species.length} species`;
})
.catch(error => {
    console.warn(error);
    output.innerText = ":(";
})
.finally(() => {
    spinner.remove();
})

// without Promise.all
// queryAPI("films").then(films => {
//     return queryAPI("planets").then(planets => {
//         output.innerText = `${films.length} films, ` + 
//         `${planets.length} planets`;
//     })
   
// }).finally(() => {
//     spinner.remove();
// })









