import express from 'express'
import getMediaByName from './api';

const server = express();
const port = 3000;

server.get('/media', (req, res) => {
    getMediaByName('John Wick 2');
})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})