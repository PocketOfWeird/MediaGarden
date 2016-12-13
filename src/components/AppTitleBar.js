import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import { yellowA400 } from 'material-ui/styles/colors'
import Logged from './Logged'
import Login from './Login'


const AppTitleBar = (props) => (
  <AppBar
    title={props.title}
    showMenuIconButton={false}
    style={styles.bar}
    titleStyle={styles.title}
    iconElementRight={
      props.logged ?
      <Logged
        currentView={props.currentView}
        handleAddTap={props.handleAddTap}
        handleBack={props.handleBack}
      />
      : <Login />
    }
  />
)

let styles={
  bar: { backgroundColor: yellowA400 },
  title: { color: '#000' }
}

AppTitleBar.propTypes = {
  logged: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  currentView: PropTypes.array.isRequired,
  handleAddTap: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired
}

export default AppTitleBar
