export const SET_TYPE_FILTER = 'SET_TYPE_FILTER'
export const SET_AUTHOR_FILTER = 'SET_AUTHOR_FILTER'
export const CLEAR_FILTERS = 'CLEAR_FILTERS'

export const setTypeFilter = value => ({
  type: SET_TYPE_FILTER,
  payload: value
})

export const setAuthorFilter = e => ({
  type: SET_AUTHOR_FILTER,
  payload: e.target.value
})

export const clearFilters = () => ({
  type: CLEAR_FILTERS
})
