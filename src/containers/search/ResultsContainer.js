import React from 'react'
import { connect } from 'react-redux'
import Results from '../../components/Results'


const mapStateToProps = state => ({
  loading: state.loading,
  resultsList: state.data
})

const mapDispatchToProps = dispatch => ({
  handleDownload: url => e => window.open(url,'_blank')
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)
