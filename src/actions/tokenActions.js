export const SET_TOKEN = 'SET_TOKEN'
export const CLEAR_TOKEN = 'CLEAR_TOKEN'

export const setToken = token => ({
  type: SET_TOKEN,
  payload: token
})

export const clearToken = () => ({
  type: CLEAR_TOKEN
})
