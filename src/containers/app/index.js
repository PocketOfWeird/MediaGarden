import React, { PropTypes } from 'react'
import AppTitleBarContainer from './AppTitleBarContainer'
import ViewsContainer from './ViewsContainer'
import ErrorContainer from './ErrorContainer'
import NoteContainer from './NoteContainer'


const App = () => (
  <div>
    <AppTitleBarContainer />
    <ViewsContainer />
    <ErrorContainer />
    <NoteContainer />
  </div>
)

export default App
