const express = require('express')
const router = express.Router()
const { sendPage } = require('../../sendPage');

router.get('/', (_, res) => {
	sendPage(res, 'me/decks');
});

module.exports = router