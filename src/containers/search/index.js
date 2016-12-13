import React from 'react'
import SearchBarContainer from './SearchBarContainer'
import FilterBarContainer from './FilterBarContainer'
import ResultsContainer from './ResultsContainer'


const SearchViewContainer = () => (
  <div>
    <SearchBarContainer />
    <FilterBarContainer />
    <ResultsContainer />
  </div>
)

export default SearchViewContainer
