const React = require('react')
const PropTypes = require('prop-types');

const Card = (props) =>(
    <div className="show-card">
                    <img src={`public/img/posters/${props.show.poster}`}   className="show-card-img"/>
                    <div className="show-card-text">
                        <h3 className="show-card-title">{ props.show.title}</h3> 
                        <h4 className="show-card-year">{ props.show.year}</h4> 
                        <p className="show-card-description">{ props.show.description}</p>
                    </div>
    </div>  
)

Card.propType = {
    show: PropTypes.object.isRequired
}

module.exports = Card;