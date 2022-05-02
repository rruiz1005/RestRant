const req = require('express/lib/request')

const router = require('express').Router()


//GET
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
    }]
    res.render('../views/places/index', {places})
})

router.get('/new', (req, res) => {
    res.send('GET /places/new')
})

router.get('/:id', (req, res) => {
    res.send(`This is GET /places/${req.params.id}`)
})

router.get('/:id/edit', (req, res) => {
    res.send(`This is GET /places/${req.params.id}/edit`)
})



//POST
router.post('/', (req, res) => {
    res.send('POST /places')
})

router.post('/:id/rant', (req, res) => {
    res.send(`This is POST /places/${req.params.id}/rant`)
})

//PUT
router.put('/:id', (res, req) => {
    res.send('This is POST /places/'`${req.params.id}`)
})


//DELETE
router.delete('/:id', (req, res) => {
    res.send(`This is DELETE /places/${req.params.id}`)
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send(`This is DELETE /places/${req.params.id}/${req.params.rantId}`)
})

module.exports = router

