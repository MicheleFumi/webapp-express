const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController.js')

/* mostra tutti i film */
router.get('/', movieController.index);

/* mostra il film singolo con i commenti correlati */
router.get('/:id', movieController.show);

router.post('/:id/review', movieController.addReview)

module.exports = router;
