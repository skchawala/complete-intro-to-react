const React = require('react')
const ReactDOM = require('react-dom');
const Landing = require('./Landing')

const { HashRouter,Route }= require('react-router-dom');

const Search = require('./Search')
const Layout = require('./Layout')

const App = () =>(
    <HashRouter>
    <div className="myroot">
       <Layout >
            <Route   path="/" exact   component={Landing}></Route>
            <Route path="/search" component={Search}></Route>
       </Layout>
    </div>
    </HashRouter>
)
ReactDOM.render(
    <App />,
    document.getElementById('app')
)