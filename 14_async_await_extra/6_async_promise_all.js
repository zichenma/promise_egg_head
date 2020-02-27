const fetch = require('node-fetch');

async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    return await response.json();
}

// async function can user try...catch to handle error
async function showUserAndRepos(handle) {
   const userPromise = fetchFromGitHub(`/users/${handle}`);
   const repoPromise = fetchFromGitHub(`/users/${handle}/repos`);
   
    const [user, repos] = await Promise.all([
         userPromise,
         repoPromise 
    ])

   console.log(user.name);
   console.log(`${repos.length} repos`);
}

showUserAndRepos('mariusschulz'); 