const express = require('express');
const { onlyAdmin, protectRoute, signup, login } = require('../controllers/authControllers')
const { getUsers, getUser, postUser, deleteUser, putUser, patchUser } = require('../controllers/userControllers');
const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/',  postUser);
router.delete('/:id',  deleteUser);
router.put('/:id',  putUser);
router.patch('/:id', patchUser);


module.exports = router;