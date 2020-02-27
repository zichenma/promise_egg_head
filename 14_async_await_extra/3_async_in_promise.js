const fetch = require('node-fetch');


class GithubApiClient {
    // await cannot be use as top level, need to be wrapped in a function
    async fetchGitHubUser(handle) {
        const url = `https://api.github.com/users/${handle}`;
        const response = await fetch(url);
        return await response.json();
    }
}

(async () => {
    const client = new GithubApiClient();
    const user = await client.fetchGitHubUser('mariusschulz');
    console.log(user.name);
    console.log(user.location);
})();
