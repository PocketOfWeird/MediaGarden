import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import throttleActions from 'redux-throttle-actions'
import { SERVER_SEARCH, SERVER_STATE } from '../actions'
import localStore from './local'
import on from './on'
import search from './search'
import add from './add'
import update from './update'
import remove from './remove'
import url from './url'
import view from './view'


const logger = createLogger({collapsed: true})
const throttler = throttleActions([SERVER_SEARCH, SERVER_STATE], 500)

const configureMiddleware = () => {
  return applyMiddleware(
    thunk,
    throttler,
    localStore,
    on,
    search,
    add,
    update,
    remove,
    url,
    view,
    logger
  )
}

export default configureMiddleware
export { hydrateState } from './local'
