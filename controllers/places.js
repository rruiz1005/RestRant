const req = require('express/lib/request')

const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models')


//GET
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch( err => {
        console.log(err)
        res.render('error404')
    })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


router.get('/:id/edit', (req, res) => {
    res.send('Get edit form stub')
})

//POST
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


router.post('/:id/rant', (req, res) => {
    res.send('POST /places/:id/rant stub')
})

//PUT
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})




//DELETE
router.delete('/:id', (req, res) => {
    res.send('Delete /places/:id stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('DELETE /places/:id/rant/:rantId stub')
})

module.exports = router

