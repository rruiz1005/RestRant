// require needed modules
require('dotenv').config()
const express = require('express')

// initialize app variable
const app = express()

//define view engine
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// import router
app.use('/places', require('./controllers/places'))

// homepage
app.get('/', (req, res) => {
    res.render('home')
})

// wildcard route
app.get('*', (req, res) => {
    res.render('error404')
})


// listen for connections
app.listen(process.env.PORT)

