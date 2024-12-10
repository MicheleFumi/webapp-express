const express = require('express')
const server = express()
const movieController = require('./controllers/movieController.js')
const host = process.env.HOST
const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server is listening on port ${host}:${port}`);
})


server.get('/', movieController.index);