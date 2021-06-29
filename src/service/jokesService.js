const url = 'https://api.chucknorris.io/jokes/random';

export const getJoke = () => {
    return fetch(`${url}`)
        .then(res => res.json())
        .catch(err => console.error(err));
}