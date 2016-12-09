import React from 'react'
import { connect } from 'react-redux'
import { setSearch, clearData } from '../../actions'
import SearchBar from '../../components/SearchBar'


const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  searchType: state.searchFilter.searchType
})

const mapDispatchToProps = dispatch => ({
  handleChange: searchType => e => {
    switch (searchType) {
      case 0:
        dispatch(setSearch(e, true, 'SFX'))
        break
      case 1:
        dispatch(setSearch(e))
        break
      case 2:
        dispatch(setSearch(e, false, 'MUSIC'))
        break
      default:
        break
    }
  },
  handleClear: e => dispatch(clearData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
