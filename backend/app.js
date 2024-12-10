const express = require('express')
const server = express()
const host = process.env.HOST
const port = process.env.PORT
const movieRouter = require('./routes/movies.js')
server.listen(port, () => {
    console.log(`Server is listening on port ${host}:${port}`);
})


server.use('/api/movies', movieRouter)