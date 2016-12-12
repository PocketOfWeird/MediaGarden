import React from 'react'
import { connect } from 'react-redux'
import { setTypeFilter, clearFilters } from '../../actions'
import FilterBar from '../../components/FilterBar'


const mapStateToProps = state => ({
  searchType: state.searchFilter.searchType
})

const mapDispatchToProps = dispatch => ({
  handleTypeChange: (e, value) => dispatch(setTypeFilter(value)),
  handleReset: e => dispatch(clearFilters())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar)
