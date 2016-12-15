import { isEmptyObject } from '../helpers'
import { setPrompt, clearPrompt } from './promptActions'


export const SERVER_STATE = 'SERVER_STATE'
export const SERVER_SEARCH = 'SERVER_SEARCH'
export const SERVER_ADD = 'SERVER_ADD'
export const SERVER_UPDATE = 'SERVER_UPDATE'
export const SERVER_REMOVE = 'SERVER_REMOVE'
export const CLEAR_DATA = 'CLEAR_DATA'
export const SET_UPDATE_DATA = 'SET_UPDATE_DATA'

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

export const serverUpdate = values => ({
  type: SERVER_UPDATE,
  payload: values
})

export const serverRemove = () => (dispatch, getState) => {
  const values = getState().form.values
  if (!isEmptyObject(values)) {
    return dispatch(setPrompt({
      question: 'Are you sure you want to delete ' + values.name,
      yesAction: () => {
        dispatch(clearPrompt())
        dispatch({
          type: SERVER_REMOVE,
          payload: values
        })
      },
      noAction: () => dispatch(clearPrompt())
    }))
  }
  return dispatch({
    type: SERVER_REMOVE,
    payload: values
  })
}

export const clearData = () => ({
  type: CLEAR_DATA
})

export const setUpdateData = data => ({
  type: SET_UPDATE_DATA,
  payload: data
})
