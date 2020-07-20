import React from 'react'
import mirror, {actions, connect, render,Router} from 'mirrorx'
import App from './App'

 
// declare Redux state, reducers and actions,
// all actions will be added to `actions`.
 

 
// start the app，`render` is an enhanced `ReactDOM.render`
render(<Router><App /></Router>, document.getElementById('root'))

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );