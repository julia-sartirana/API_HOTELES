const express = require('express');
const { onlyAdmin, protectRoute } = require('../controllers/authControllers')
const { getReviews, getReview, postReview, deleteReview } = require('../controllers/reviewControllers');
const router = express.Router();

router.get('/', getReviews);
router.get('/:id', getReview);
router.post('/', protectRoute, onlyAdmin, postReview);
router.delete('/:id', protectRoute, onlyAdmin, deleteReview);



module.exports = router;