import React from 'react'
import { connect } from 'react-redux'
import { setSearch, clearSearch, setUpdateData, setCurrentView } from '../../actions'
import { filterResults, isLoggedIn } from '../../selectors'
import { setE } from '../../helpers'
import Results from '../../components/Results'


const mapStateToProps = state => ({
  loading: state.loading,
  resultsList: filterResults(state),
  logged: isLoggedIn(state)
})

const mapDispatchToProps = dispatch => ({
  handleDownload: url => e => window.open(url,'_blank'),
  handleKeyword: keyword => e => {
    dispatch(clearSearch())
    dispatch(setSearch(setE(keyword)))
  },
  handleTapUpdate: data => e => {
    dispatch(setUpdateData(data))
    dispatch(setCurrentView(['update']))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)
