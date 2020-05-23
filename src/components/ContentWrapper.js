import React, { Component } from 'react'
import TablePage from './TablePage'
import BlankPage from './BlankPage'

export default class ContentWrapper extends Component {
    render() {
        return (
            <div class="content-wrapper">
                <TablePage></TablePage>
                <BlankPage></BlankPage>
            </div>
        )
    }
}
