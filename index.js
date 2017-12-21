const express = require('express')
const app = express()
const routes = require('./server/routes')
const loginUtils = require('./server/buisnessLogic/authentication/login');
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(async (req, res, next) => {
	const username = await loginUtils.getUsername(req.cookies);
	req.username = username;
  next();
})
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './client', 'index.html')))
app.use('/api', routes.api)
app.use('/site', routes.siteNavigation)
app.use('/nm', express.static('node_modules'))
app.use(express.static('client'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))