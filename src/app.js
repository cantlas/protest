// React
import React from 'react'
import ReactDOM from 'react-dom'
// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// Containers or components
import ProtestListContainer from './containers/ProtestListContainer'
// Reducer
import reducer from './reducers'
// Thunk
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
// Actions
import { getByTitle, getByLocation, receiveProtests } from './actions'

/*
let initialState = {
  isFetching: false,
  protests: [
    { id: 1,
      title: "Marriage Equality Rally",
      location: "Victoria Square",
      date: "24 July 2017",
      time: "1pm",
      about: "Hi all. This Saturday we will be marching to make marriage equality law. Arrive half an hour early at Victoria Square (12.30pm) for march to Adelaide Town Hall."
      },
    { id: 2,
      title: "Climate Change Rally",
      location: "North Terrace",
      date: "1 August 2017",
      time: "9am",
      about: "End fossil fuel subsidies. Action on renewables."
    },
    { id: 3,
      title: "NO Penalty Rate CUTS!",
      location: "Liberal Party Headquarters",
      date: "14 September 2017",
      time: "2pm",
      about: "It's time to show the Turnbull Government our anger!"}
  ]
}
*/

let store = createStore(reducer, initialState)

console.log(store.getState())

// Main component
const App = Component => (
      <div>
        <ProtestListContainer />
      </div>
)

// Render to page
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
