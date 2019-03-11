const React = require('react')
const PropTypes = require('prop-types');

const Card = (props) =>(
    <div className="show-card">
                    <img src={`public/img/posters/${props.show.poster}`}   className="show-img"/>
                    <div className="show-text">
                        <h3 className="show-title">{ props.show.title}</h3> 
                        <h4 className="show-year">{ props.show.year}</h4> 
                        <p className="show-description">{ props.show.description}</p>
                    </div>
    </div>  
)

Card.propType = {
    show: PropTypes.object.isRequired
}

module.exports = Card;