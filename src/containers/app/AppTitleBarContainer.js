import React from 'react'
import { connect } from 'react-redux'
import { setCurrentView, goBackward } from '../../actions'
import { isLoggedIn } from '../../selectors'
import AppTitleBar from '../../components/AppTitleBar'

const mapStateToProps = state => ({
  title: 'Media Garden',
  logged: isLoggedIn(state),
  currentView: state.view.current
})

const mapDispatchToProps = dispatch => ({
  handleAddTap: e => dispatch(setCurrentView(['add'])),
  handleBack: e => dispatch(goBackward()),
  handleLogin: e => {
    window.location = '/login'
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppTitleBar)
