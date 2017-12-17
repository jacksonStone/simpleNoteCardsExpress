const express = require('express')
const app = express()
const routes = require('./server/routes')
const path = require('path')

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './client/html', 'home.html')))

app.use('/api', routes.api)
app.use('/site', routes.siteNavigation)
app.use(express.static('client'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))