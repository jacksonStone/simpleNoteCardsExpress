const express = require('express')
const router = express.Router()
const { addCard } = require('../../buisnessLogic/cards/addCard');
const { getCards } = require('../../buisnessLogic/cards/getCards');
const code = require('../../nodeAbstractions/responseCodes');

router.post('/create', async (req, res) => {
 	if(!req.body) return code.invalidRequest(res);
 	if(!req.username) return code.unathorized(res);
 	
 	await addCard(req.username, req.body);
 	code.ok(res);
});

router.get('/me', async (req, res) => {
 	const cards = await getCards(req.username);
 	res.send(cards);
 	res.end();
});

module.exports = router;