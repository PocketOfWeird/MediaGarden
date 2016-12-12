import { createSelector } from 'reselect'

const dataSelector = state => ({
  searchType: state.searchFilter.searchType,
  data: state.data
})

export const filterResults = createSelector(
  dataSelector,
  ({ searchType, data }) => {
    switch (searchType) {
      case 0:
        return data.filter(sound => sound.type === 'SFX')
      case 1:
        return data
      case 2:
        return data.filter(sound => sound.type === 'MUSIC')
      default:
        return data
    }
  }
)

export const selectSearchType = state => state.searchFilter.searchType ? state.searchFilter.searchType === 2 ? 'MUSIC':'':'SFX'
