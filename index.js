// require needed modules
require('dotenv').config()
const express = require('express')

// initialize app variable
const app = express()

//define view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// import router
app.use('/places', require('./controllers/places'))

// homepage
app.get('/', (req, res) => {
    res.render('home')
})

// wildcard route
app.get('*', (req, res) => {
    res.status(404).send(
        '<h1>404 Page</h1>'
    )
})

// listen for connections
app.listen(process.env.PORT)

