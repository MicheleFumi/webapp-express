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

function show(req, res) {
    const id = req.params.id
    const getAllMovies = `SELECT * FROM movies WHERE id=?`
    const reviewsql = `SELECT * FROM reviews WHERE movie_id=?`
    connection.query(getAllMovies, [id], (err, results) => {
        if (err) return res.status(500).json({ err: err })
        if (results.length == 0) return res.status(404).json({ err: 'sorry, nothing to see here yet!' })
        connection.query(reviewsql, [id], (err, reviewResults) => {
            if (err) return res.status(500).json({ err: err })
            const singleMovie = {
                ...results[0],
                reviews: reviewResults


            }
            res.json(singleMovie)
        })
    })
}

function addReview(req, res) {
    const movie_id = Number(req.params.id)
    const { username, vote, text } = req.body

    const now = new Date()
    const todayDate = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`

    const sql = "INSERT INTO `reviews` SET movie_id=?, name=?, vote=?, text=?, created_at=?, updated_at=?"
    console.log(req.body);

    connection.query(sql, [movie_id, username, vote, text, todayDate, todayDate], (err, response) => {
        if (err) return res.status(500).json({ error: err })
        return res.status(201).json({ success: true, response })

    })
}





module.exports = {
    index,
    show,
    addReview

}