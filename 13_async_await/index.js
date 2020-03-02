// More on: 
// https://github.com/mariusschulz/egghead-async-await/tree/master

// #region 
const API_URL = 'https://starwars.egghead.training/';

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


async function queryAPI(endpoint) {
    const response = await fetch(API_URL + endpoint);
    if (response.ok) {
        return response.json();
    }
    throw Error("Unsuccessful response")
}

async function main() {
    try {
        const [films, planets] = await Promise.all([
            queryAPI('films'),
            queryAPI('planets')
        ]);
        output.innerText = 
        `${films.length} films, ` + 
        `${planets.length} planets`; 
    } catch (error) {
        console.warn(error);
        output.innerText = ':(';
    } finally {
        spinner.remove();
    }
    
}

// main().catch(error => {
//     console.warn(error);
//     output.innerText = ':(';
//     spinner.remove();
// });

main();


