const { Router } = require('express');
const { addRating, removeRating } = require('../controller/rating.ontroller');

const ratingRoute = Router();

ratingRoute.post('/addrating', addRating);
ratingRoute.delete('/delete/:productId', removeRating);

module.exports = ratingRoute;