import { clearData, clearToken } from '../actions'

export const login = () => {
  window.location = '/login'
}

export const logout = () => dispatch => {
  dispatch(clearData())
  dispatch(clearToken())
  window.location = '/logout'
}
