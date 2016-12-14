import { isEmptyObject } from '../helpers'
import { setPrompt, clearPrompt } from './promptActions'


export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW'
export const GO_BACKWARD = 'GO_BACKWARD'
export const GO_FORWARD = 'GO_FORWARD'
export const CLEAR_URL = 'CLEAR_URL'

export const setCurrentView = view => ({
  type: SET_CURRENT_VIEW,
  payload: view
})

export const setDefaultView = () => ({
  type: SET_CURRENT_VIEW,
  payload: ['search']
})

export const goBackward = () => (dispatch, getState) => {
  if (!isEmptyObject(getState().form.values)) {
    return dispatch(setPrompt({
      question: 'Are you sure you want to leave without saving?',
      yesAction: () => {
        dispatch(clearPrompt())
        dispatch({ type: GO_BACKWARD })
      },
      noAction: () => dispatch(clearPrompt())
    }))
  }
  return dispatch({ type: GO_BACKWARD })
}

export const goForward = () => ({
  type: GO_FORWARD
})

export const clearUrl = () => ({
  type: CLEAR_URL
})
