const React = require('react')
const ReactDOM = require('react-dom');
const div = React.DOM.div;

const MyTitle = require('./MyTitle');

const myTtitleFact = React.createFactory(MyTitle);
const ce = React.createElement;
// const MyComp = function() {

//     return (
//         <div>
//             <MyTitle title='1234'></MyTitle>
//             <MyTitle title='hi frenass'></MyTitle>
//             <MyTitle title='satish kumar'></MyTitle>
//         </div>
//     )
    const MyComp = () =>  (
            <div>
                <MyTitle title='1234'></MyTitle>
                <MyTitle title='hi frenass'></MyTitle>
                <MyTitle title='satish kumar'></MyTitle>
            </div>
        )
//    return div(null,
//        React.createElement(MyTitle,null),
//        ce(MyTitle,{title:'12344'}),
//        myTtitleFact(null)
//     )

ReactDOM.render(
    <MyComp />,
    document.getElementById('app')
)