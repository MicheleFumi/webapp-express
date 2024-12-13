const express = require('express')
const server = express()
const host = process.env.HOST
const port = process.env.PORT
const movieRouter = require('./routes/movies.js')
const NotFound = require('./middlewares/NotFound.js')
const ServerErrorsHandler = require('./middlewares/ServerErrorsHandler')
const cors = require('cors');

server.use(express.json())

server.use(cors())

/* route dei film */
server.use('/api/movies', movieRouter)

/* error middleware per gli errori 404 */
server.use(NotFound)

/* error middleware per gli errori 500 */
server.use(ServerErrorsHandler)


server.listen(port, () => {
    console.log(`Server is listening on port ${host}:${port}`);
})
