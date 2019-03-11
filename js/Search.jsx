const React = require('react');
const data = require('../data.json')
const Card = require('./Card')
const Search = () =>(
      <div className="container">
      <div className="shows">
            {
            data.shows.map((show)=>(
               <Card show={show} key={show.imdbID} />
            ))
            }
        </div>
      </div>
)


module.exports = Search;