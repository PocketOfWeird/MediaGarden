import React, { PropTypes } from 'react'
import AppTitleBarContainer from './AppTitleBarContainer'
import ViewsContainer from './ViewsContainer'
import ErrorContainer from './ErrorContainer'
import NoteContainer from './NoteContainer'
import PromptContainer from './PromptContainer'
import BrowserWarningContainer from './BrowserWarningContainer'
import { getBrowser } from '../../helpers'


const browser = getBrowser()

const App = () => (
  <div>
    {browser === 'Microsoft Internet Explorer' &&
      <BrowserWarningContainer />
    }
    {browser !== 'Microsoft Internet Explorer' &&
      <div style={styles}>
        <AppTitleBarContainer />
        <ViewsContainer />
        <PromptContainer />
        <ErrorContainer />
        <NoteContainer />
      </div>
    }
  </div>
)

let styles = {
  maxWidth: 768
}

export default App
