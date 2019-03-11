const React = require('react')
const ReactDOM = require('react-dom');
const Landing = require('./Landing')

const { HashRouter,Route }= require('react-router-dom');

const Search = require('./Search')
const Layout = require('./Layout')

const {store} = require('./Store')

const  { Provider }  = require('react-redux')

const App = () =>(
    <Provider store={store}>
        <HashRouter>
        <div className="myroot">
        <Layout >
                <Route   path="/" exact   component={Landing}></Route>
                <Route path="/search" component={Search}></Route>
        </Layout>
        </div>
        </HashRouter>
    </Provider>
)

ReactDOM.render(
    <App />,
    document.getElementById('app')
)