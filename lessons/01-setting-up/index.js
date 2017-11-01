import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Param from './modules/Param'

// render(<App/>, document.getElementById('app'))
render( 
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/repos" component={Repos}/>
            <Route path="/about" component={About}/>
            <Route path="/any/:params" component={Param}/>
        </Route>
    </Router> 
,document.getElementById('app'))