import React from 'react'
import { connect } from 'react-redux'
import { setSearch, clearData } from '../../actions'
import SearchBar from '../../components/SearchBar'


const mapStateToProps = state => ({
  searchTerm: state.searchTerm
})

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(setSearch(e)),
  handleClear: e => dispatch(clearData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
