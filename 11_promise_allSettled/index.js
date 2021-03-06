
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

// Promise.allSettled will return all states, no matter it's resolved or rejected
// only if the input is not an array, allSettled will throw error 

const promise = Promise.allSettled([
    queryAPI('films1').then(f => `${f.length} films`), // wrong endpoint
    queryAPI('planets').then(p => `${p.length} planets`),
    queryAPI('species').then(s => `${s.length} species`),
    queryAPI('vehicles').then(v => `${v.length} vehicles`)
])

promise.then(results => {
    const statistics = results
    .filter(result => result.status === 'fulfilled')
    .map(result => result.value);
    output.innerText = statistics.length === 0 ? 'Failed to load statistics :(' : statistics.join('\n');
})
.catch(error => {
    console.warn(error);
    output.innerText = ":(";
})
.finally(() => {
    spinner.remove();
})









