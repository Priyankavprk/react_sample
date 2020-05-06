import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route } from "react-router-dom"
import store from './Config/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Chart from './Components/Chart'
import Table from './Components/Table'
import Users from './Components/Users'
import Form from './Components/Form'

ReactDOM.render(
    <Provider store={store}>
        <Header />
            <Router>
                <Route path='/' exact component={Home} />
                <Route path='/employers' component={Chart} />
                <Route path='/branches' component={Table} />
                <Route path='/users' component={Users} />
                <Route path='/form/addemployee' component={Form}/>
                <Route path='/form/addbranch' component={Form}/>
                <Route path='/form/adduser' component={Form}/>
            </Router>
        <Footer />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
