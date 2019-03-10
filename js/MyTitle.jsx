
const React = require('react')

const MyTitle = React.createClass(
    {
       render(){
           return(
                <div>
                    <h1>hey boss {this.props.title}</h1>
                </div>
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