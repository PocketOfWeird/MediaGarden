import React, { PropTypes } from 'react'
import AppTitleBarContainer from './AppTitleBarContainer'
import ViewsContainer from './ViewsContainer'
import ErrorContainer from './ErrorContainer'
import NoteContainer from './NoteContainer'
import PromptContainer from './PromptContainer'
import BrowserWarningContainer from './BrowserWarningContainer'
import { getBrowser } from '../../helpers'


const browser = getBrowser()
const unSupportedBrowser = browser !== 'Chrome' && browser !== 'Firefox'

const App = () => (
  <div>
    {unSupportedBrowser &&
      <BrowserWarningContainer />
    }
    {!unSupportedBrowser &&
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
