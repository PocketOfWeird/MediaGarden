export const SERVER_STATE = 'SERVER_STATE'
export const SERVER_SEARCH = 'SERVER_SEARCH'
export const SERVER_ADD = 'SERVER_ADD'
export const CLEAR_DATA = 'CLEAR_DATA'

export const serverState = state => ({
  type: SERVER_STATE,
  payload: state
})

export const serverSearch = searchTerm => ({
    type: SERVER_SEARCH,
    payload: searchTerm
})

export const serverAdd = values => ({
  type: SERVER_ADD,
  payload: values
})

export const clearData = () => ({
  type: CLEAR_DATA
})
