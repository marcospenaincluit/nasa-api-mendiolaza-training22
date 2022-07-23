const express = require('express');
const router = express.Router();
const { addUser, getUsers, getUserById, updateUserById} = require('../controllers/users.controller');

/* NASA endpoints*/
router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/:id', updateUserById);
router.post('/new', addUser);



module.exports = router;
