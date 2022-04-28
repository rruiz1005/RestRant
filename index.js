// require needed modules
const express = require('express')

// initialize app variable
const app = express()

// homepage
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// listen for connections
app.listen(3000)

