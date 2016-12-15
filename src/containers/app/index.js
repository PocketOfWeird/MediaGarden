import React, { PropTypes } from 'react'
import AppTitleBarContainer from './AppTitleBarContainer'
import ViewsContainer from './ViewsContainer'
import ErrorContainer from './ErrorContainer'
import NoteContainer from './NoteContainer'
import PromptContainer from './PromptContainer'

const App = () => (
  <div style={styles}>
    <AppTitleBarContainer />
    <ViewsContainer />
    <PromptContainer />
    <ErrorContainer />
    <NoteContainer />
  </div>
)

let styles = {
  maxWidth: 768
}

export default App
