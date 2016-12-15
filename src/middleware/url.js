import { CLEAR_URL, clearUrl, setToken, raiseError, raiseNote } from '../actions'


const url = store => next => action => {
  if (action.type === 'INITIALIZE') {
    const url = window.location.href
    const afterHashSlash = url.substr(url.indexOf('#/') + 2)

    if (afterHashSlash.substr(0,10) === 'authorized') {
      const token = afterHashSlash.substr(afterHashSlash.indexOf('?data=') + 6)
      store.dispatch(setToken(token))
      store.dispatch(clearUrl())
      store.dispatch(raiseNote('You successfully logged in'))
    }
    if (afterHashSlash.substr(0,12) === 'unauthorized') {
      store.dispatch(raiseError({ message: 'You are not authorized to login.' }))
      store.dispatch(clearUrl())
    }
  }
  if (action.type === CLEAR_URL) {
    // Remove '#' and anything after
    const url = window.location.href
    window.location.href = url.substr(0, url.indexOf('#'))
  }
  return next(action)
}

export default url
