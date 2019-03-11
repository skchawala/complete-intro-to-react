const React = require('react')
const PropTypes = require('prop-types');

const Layout = (props) =>(
      <div className="app-container">
        {props.children}
      </div>
)


Layout.propType = {
    children: PropTypes.element.isRequired
}

module.exports = Layout