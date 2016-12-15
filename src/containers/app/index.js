import React, { PropTypes } from 'react'
import AppTitleBarContainer from './AppTitleBarContainer'
import ViewsContainer from './ViewsContainer'
import ErrorContainer from './ErrorContainer'
import NoteContainer from './NoteContainer'
import PromptContainer from './PromptContainer'

const App = () => (
  <div>
    <AppTitleBarContainer />
    <ViewsContainer />
    <PromptContainer />
    <ErrorContainer />
    <NoteContainer />
  </div>
)

export default App
