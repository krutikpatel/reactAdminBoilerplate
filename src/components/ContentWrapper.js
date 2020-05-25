import React, { Component } from 'react'
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import TablePage from './TablePage'
import BlankPage from './BlankPage'
import FormPage from './FormPage'
import Login from './Login'

export default class ContentWrapper extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <Switch>
                <Route path="/" component={BlankPage} exact />
                <Route path="/link1" component={BlankPage} />
                <Route path="/link2" component={TablePage} />
                <Route path="/link3" component={FormPage} />
                <Route path="/link4" component={Login} />
                </Switch>

                
            </div>
        )
    }
}

/*
<TablePage></TablePage>
                <BlankPage></BlankPage>
*/