// import react
const React = require('react')

// stub function with html skeleton
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel = 'stylesheet' href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'></link>
                <link rel='stylesheet' href='/css/style.css'></link>
            </head>
            <body>
                <nav></nav>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/places'>Places</a>
                    </li>
                    <li>
                        <a href='/places/new'>Add Place</a>
                    </li>
                </ul>
                {html.children}
            </body>
        </html>
    )
}

// export function
module.exports = Def 