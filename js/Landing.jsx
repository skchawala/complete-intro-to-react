const React = require('react')
const { Link } = require('react-router-dom')

const Landing = () =>(
    <div className="app-container">
      <div className="home-info">
        <h1 className="title">
          Landing page
        </h1>
        <input className="search" type="text" placeholder="Search" />
        <Link to="/search" className="browse-all"> Or browse all</Link>
      </div>
    </div>
)

module.exports = Landing;