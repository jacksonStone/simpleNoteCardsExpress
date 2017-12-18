var express = require('express')
var router = express.Router()
const home = require('./pages/home');

router.use('/home', home);

module.exports = router