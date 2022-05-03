const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src='/images/pancakes.jpg' alt='Pancakes'></img>
                </div>
                <div>
                    Photo by <a href='https://unsplash.com/@briewilly'>Chad Montano</a> on <a href='https://unsplash.com/s/photos/food'>Unsplash</a>
                </div>
                <a href='/places'>
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home