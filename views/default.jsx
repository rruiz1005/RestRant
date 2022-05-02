// import react
const React = require('react')

// stub function with html skeleton
function Def (html) {
    return (
        <html>
            <head>
                <title>TItle</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

// export function
module.exports = Def 