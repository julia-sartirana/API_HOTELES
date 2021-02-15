const express = require('express');
const { protectRoute, onlyAdmin  } = require('../controllers/authControllers')
const { getHotels, getHotel, postHotel, deleteHotel, putHotel, patchHotel } = require('../controllers/hotelControllers');
const router = express.Router();

router.get('/', getHotels);
router.get('/:id', getHotel);
router.post('/', protectRoute, onlyAdmin, postHotel);
router.delete('/:id', protectRoute, onlyAdmin, deleteHotel);
router.put('/:id', protectRoute, onlyAdmin, putHotel);
router.patch('/:id', protectRoute, onlyAdmin, patchHotel);


module.exports = router;