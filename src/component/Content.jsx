import React, { Component } from 'react'

import Heading from './Heading'
import Table from './Table'
export default class Content extends Component {
    render() {
        return (
            <>
                <div>
                    <Heading />
                </div>
                <div>
                    <Table />
                </div>
            </>
        )
    }
}