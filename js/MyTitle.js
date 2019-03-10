
var React = require('react')
var div = React.DOM.div;
var h1 = React.DOM.h1;

const MyTitle = React.createClass(
    {
       render(){
           return(
                div(null,
                    h1(null,'this is my first component'+this.props.title)
                )  
           ) 
       }
    }
)

// class MyTitle extends React.Component{
//     render(){
//        retrun ( div(null,
//             h1(null,'this is my first component'+this.props.title)
//         )  
//     )
//        }
// }

module.exports = MyTitle;