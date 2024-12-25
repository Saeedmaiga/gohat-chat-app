const express = require('express');

const router = express.Router();
const registerUser = require('../controller/registerUser');

// create user api

router.post('/register', registerUser);

module.exports = router;