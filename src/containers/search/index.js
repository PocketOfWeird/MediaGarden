import React from 'react'
import { connect } from 'react-redux'
import SearchBar from '../../components/SearchBar'
import Browse from '../../components/Browse'

const SearchViewContainer = (props) => (
  <div>
    <SearchBar
      dataSource={props.suggestionSource}
      handleUpdateInput={props.handleSuggestions}
    />
    <Browse
      categories={props.categories}
      handleClick={props.handleBrowse}
    />
  </div>
)

const mapStateToProps = state => ({
  suggestionSource: ['pickles','chips','cheese'],
  categories: state.data.categories || {}
})

const mapDispatchToProps = dispatch => ({
  handleSuggestions: searchText => console.log(searchText),
  handleBrowse: id => e => console.log(id)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchViewContainer)
