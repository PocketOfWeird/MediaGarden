import { raiseError } from './errorActions'


export const SERVER_STATE = 'SERVER_STATE'
export const SERVER_SEARCH = 'SERVER_SEARCH'
export const CLEAR_DATA = 'CLEAR_DATA'

export const serverState = state => ({
  type: SERVER_STATE,
  payload: state
})

export const serverSearch = searchTerm => {
  if (typeof(searchTerm) !== 'string') {
    return raiseError({message: 'Invalid Search term'})
  }
  return {
    type: SERVER_SEARCH,
    payload: searchTerm
  }
}

export const clearData = () => ({
  type: CLEAR_DATA
})
