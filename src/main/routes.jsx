import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute, browserHistory } from 'react-router'

import Details from '../details/details'
import DetailsList from '../details/detailsList'
import Teste from '../teste/teste'
import TesteUnit from '../teste/testeUnit'
import Dashboard from '../dashboard/dashboard'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path="/repo" component={Details}>
            <Route path='/repo/:id' component={DetailsList}/>
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)