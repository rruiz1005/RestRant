const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src='/images/saddog.jpg' alt='Sad Dog'></img>
                </div>
                <div>
                Photo by <a href='https://unsplash.com/@charlesdeluvio'>Charles Deluvio</a> on <a href='https://unsplash.com/'>Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404