const React = require('react')
const { Link } = require('react-router-dom')
const { connector } = require('./Store')

class Landing extends React.Component{
    
    constructor(props){
        super(props)
        this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
        this.gotToSearch = this.gotToSearch.bind(this)
    }

    handleSearchTermEvent(e){
       this.props.setSearchTerm(e.target.value)
    }
    gotToSearch(e){
       this.props.history.push('search')
       event.preventDefault()
    }
    render(){
        return (
            <div className="app-container">
            <div className="home-info">
                <h1 className="title">
                Landing page
                </h1>
                <form onSubmit={this.gotToSearch}>
                    <input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className="search" type="text" placeholder="Search" />
                </form>
                <Link to="/search" className="browse-all"> Or browse all</Link>
            </div>
            </div>
        )
    }
}

module.exports = connector(Landing);