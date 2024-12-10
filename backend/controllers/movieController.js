const connection = require('../DB/connection')


function index(req, res) {
    const getAllMovies = 'SELECT * FROM movies'
    connection.query(getAllMovies, (err, results) => {
        if (err) return res.status(500).json({ err: err })
        res.json({
            movies: results,
            counter: results.length
        })
    })
}

module.exports = {
    index,

}