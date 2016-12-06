import React from 'react'
import { connect } from 'react-redux'
import { isLoggedIn } from '../../selectors'
import AppTitleBar from '../../components/AppTitleBar'

const mapStateToProps = state => ({
  title: 'Media Garden',
  logged: isLoggedIn(state),
  cartCount: 1
})

const mapDispatchToProps = dispatch => ({
  handleCartTap: e => console.log('Cart tapped!'),
  handleAddTap: e => console.log('Add tapped!')
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppTitleBar)
