const express = require('express');
const { onlyAdmin, protectRoute, signup, login } = require('../controllers/authControllers')
const { getUsers, getUser, postUser, deleteUser, putUser, patchUser } = require('../controllers/userControllers');
const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', protectRoute, onlyAdmin, postUser);
router.delete('/:id', protectRoute, onlyAdmin, deleteUser);
router.put('/:id', protectRoute, onlyAdmin, putUser);
router.patch('/:id', protectRoute, onlyAdmin, patchUser);


module.exports = router;