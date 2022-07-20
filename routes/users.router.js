const express = require('express');
const router = express.Router();
const { addUser, getUsers, getUserById} = require('../controllers/users.controller');

/* NASA endpoints*/
router.get('/', getUsers);
router.get('/:id', getUserById)
router.post('/new', addUser);



module.exports = router;
