const express = require('express')
const router = express.Router()
const { sendPage } = require('../sendPage');

router.get('/', async (req, res) => {
	sendPage(res, 'test');
});

module.exports = router