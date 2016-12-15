import { serverSearch, clearData } from './dataActions'


export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'

export const clearSearch = () => dispatch => {
  return dispatch(clearData())
}

export const staticSetSearch = value => ({
  type: SET_SEARCH_TERM,
  payload: value
})

export const setSearch = e => dispatch => {
  if (e.target.value === '') dispatch(clearSearch())
  dispatch(staticSetSearch(e.target.value))
  if (e.target.value.length > 2) {
    return dispatch(serverSearch(e.target.value))
  }
}
