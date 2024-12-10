const ServerErrorsHandler = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('nuke has destroyed everything! sorry')
}
module.exports = ServerErrorsHandler