const express = require('express');
const router = express.Router();
const { getApod } = require('../controllers/nasa/apod.controller');

/* NASA endpoints*/
router.get('/apod', getApod);


module.exports = router;
