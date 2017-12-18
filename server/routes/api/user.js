const express = require('express')
const router = express.Router()
const { getUserDetails } = require('../../buisnessLogic/getUserDetails');

router.get('/me', async (req, res) => {
	const user = await getUserDetails(req.cookies);
 	res.send(user);
 	res.end();
});

module.exports = router