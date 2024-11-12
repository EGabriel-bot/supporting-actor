import 'dotenv/config'
import { Response } from 'express';

const key = `Bearer ${process.env.TMDB_API_KEY}`

async function getMediaByName(name: string) {

    const encodedName = encodeURIComponent(name);

    const url = `https://api.themoviedb.org/3/search/movie?query=${encodedName}&include_adult=false&language=en-US&page=1`;
    const options: Object = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `${key}`
        }
    }
    const response = await fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error(err));

    return response;
};

export default getMediaByName


