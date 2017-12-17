const express = require('express')
const router = express.Router()
const { verify, getLoginCookie } = require('../../buisnessLogic/authentication/login');

router.post('/', async (req, res) => {
 	if(!req.body) return res.sendStatus(404);
 	const username = req.body.username;
 	const password = req.body.password;
 	if(!username || !password) return res.sendStatus(404);

 	const passwordValid = await verify(username, password);

 	if(!passwordValid) return res.sendStatus(401);

 	const cookie = getLoginCookie(username);
 	res.cookie(cookie.name, cookie.value, cookie.options);
 	res.sendStatus(200);

});

module.exports = router