var React = require('react')
var ReactDOM = require('react-dom');
var div = React.DOM.div;

var MyTitle = require('./MyTitle.js');

var myTtitleFact = React.createFactory(MyTitle);
var ce = React.createElement;
const MyComp = (
    div(null,
       React.createElement(MyTitle,null),
       ce(MyTitle,{title:'hi'}),
       myTtitleFact(null)
    )
)

ReactDOM.render(
    MyComp,
    document.getElementById('app')
)