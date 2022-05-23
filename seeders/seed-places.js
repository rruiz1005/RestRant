const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffeeshop.jpg',
    founded: 2020
}, {
    name: 'Empanada Truck',
    city: 'Passaic',
    state: 'NJ',
    cuisines: 'Dominican',
    pic: '/images/empanada.jpg',
    founded: 2022
}, {
    name: 'El Sombrero Loco',
    city: 'Paterson',
    state: 'NJ',
    cuisines: 'Mexican',
    pic: '/images/tacos.jpg',
    founded: 2004
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Faulire!', err)
    process.exit()
})
