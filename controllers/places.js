const req = require('express/lib/request')

const router = require('express').Router()


//GET
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/Thai.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffeeshop.jpg'
    }]
    res.render('../views/places/index', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    res.send(`This is GET /places/${req.params.id}`)
})

router.get('/:id/edit', (req, res) => {
    res.send(`This is GET /places/${req.params.id}/edit`)
})



//POST
router.post('/', (req, res) => {
    console.log(req.body)
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

