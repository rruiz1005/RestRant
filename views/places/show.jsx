const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
            <div className="border">
                <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                <h4>{c.content}</h4>
                <h3>
                    <stong>- {c.author}</stong>
                </h3>
                <h4>Rating: {c.stars}</h4>
            </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name}></img>
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className='col-sm-6'>
                        <h1>{data.place.name}</h1>
                        <div>
                            <h3>Rating</h3>
                            <p>Not Rated</p>
                        </div>
                        <h2>
                            Description
                        </h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                            <button type='submit' className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                    <hr></hr>
                    <div>
                        <h3>Comments</h3>
                        {comments}
                    </div>

                    <hr></hr>
                    <h2>Got Your Own Rant or Rave?</h2>
        <form method='POST' action={`/places/${data.place.id}/comment`}>
            <div className="row">
                <div className="form-group col-sm-12">
                    <label htmlFor="content">Say Whats On Your Mind!</label>
                    <textarea id="content" name="content" className="form-control"></textarea>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-sm-4">
                    <label for="author">Author</label>
                    <input id="author" name="author" className="form-control" />
                </div>
                <div id="slidecontainer" className="form-group col-sm-4">
                    <label htmlFor="stars">Star Rating</label>
                    <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                </div>
                <div className="form-group col-sm-2">
                    <div className='row'>
                        <label htmlFor="rant">Rant?</label>
                        <input type="checkbox" id="rant" name="rant" />
                    </div>
                </div>
            </div>
            <input type="submit" className="btn btn-primary" value="Add Comment" />
        </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show