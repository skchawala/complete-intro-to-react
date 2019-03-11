const React = require('react');
const data = require('../data.json')
const Card = require('./Card')

const { connector } = require('./Store')
class Search extends React.Component{


  constructor(props){
    super(props) 
    this.state = {
      
    }
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }
 
  handleSearchTermEvent(e){
   //this.setState({searchTerm : e.target.value})
   this.props.setSearchTerm(e.target.value)
  }

  render(){
        return  (
            <div className="container">
                <header className="header">
                    <h1 className="brand">svideo</h1>
                    <input   value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className="search-input" placeholder="search"/>
                </header>
                <div className="shows">
                    {
                    data.shows
                    .filter((show)=>`${show.title} ${show.description}`.toLocaleUpperCase().indexOf(this.props.searchTerm.toLocaleUpperCase())>=0)
                    .map((show)=>(
                        <Card show={show} key={show.imdbID} />
                    ))
                    }
                </div>
            </div>
      )
    }
   
}


module.exports = connector(Search);