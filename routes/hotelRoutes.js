const express = require('express');
const { onlyAdmin, protectRoute } = require('../controllers/authControllers')
const { getHotels, getHotel, postHotel, deleteHotel, putHotel, patchHotel } = require('../controllers/hotelControllers');
const router = express.Router();

router.get('/', getHotels);
router.get('/:id', getHotel);
router.post('/', postHotel);
router.delete('/:id',  deleteHotel);
router.put('/:id', putHotel);
router.patch('/:id', patchHotel);


module.exports = router;