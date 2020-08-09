import React, { Component } from 'react'
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import SidebarContent from './SidebarContent';
import ContentWrapper from './ContentWrapper';

import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import TablePage from './TablePage'
import BlankPage from './BlankPage'
import FormPage from './FormPage'
import Login from './Login'

export default class Homepage extends Component {

    componentDidMount () {
        console.log( this.props );
        if(this.props.history.location.hash === "#table") {
            console.log('its table page !!!');
        }
    }

    render() {

        return (
            <div className="wrapper">
                <Header></Header>
                <Menu></Menu>
                <div className="content-wrapper">
                    <Switch>
                    {/* now instead of route, filter by some prop passed from Home route --> hash param does not seem to work, 
                    or specify all routes at top and rerender everything everytime :( */}
                    <Route path="/link1" component={BlankPage} />
                    <Route path="/link2" component={TablePage} />
                    <Route path="/link3" component={FormPage} />
                    <Route path="/link4" component={Login} />
                    </Switch>

                    <p>cw</p>
                </div>
                <SidebarContent></SidebarContent>
                <Footer></Footer>
            </div>
        )
    }
}
