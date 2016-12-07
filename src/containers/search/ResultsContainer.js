import React from 'react'
import { connect } from 'react-redux'
import { setSearch, clearSearch } from '../../actions'
import { setE } from '../../helpers'
import Results from '../../components/Results'


const mapStateToProps = state => ({
  loading: state.loading,
  resultsList: state.data
})

const mapDispatchToProps = dispatch => ({
  handleDownload: url => e => window.open(url,'_blank'),
  handleKeyword: keyword => e => {
    dispatch(clearSearch())
    dispatch(setSearch(setE(keyword)))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)
