import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from './store/configureStore'
import App from './containers/app'


injectTapEventPlugin()

// Create the redux store
let store = configureStore()
store.dispatch({ type: 'INITIALIZE'})

// Build the root React Component
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
