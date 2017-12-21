var express = require('express')
var router = express.Router()


router.use('/home', require('./pages/home'));
router.use('/test', require('./pages/test'));

module.exports = router