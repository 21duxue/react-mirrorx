import React, { Component } from 'react'
import mirror, {actions, connect, render} from 'mirrorx'

export default class NewApp extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.count}</h1>
                {/* dispatch the actions */}
                <button onClick={() => actions.app.decrement()}>-</button>
                <button onClick={() => actions.app.increment()}>+</button>
                {/* dispatch the async action */}
                <button onClick={() => actions.app.incrementAsync()}>+ Async</button>
            </div>
        )
    }
}
