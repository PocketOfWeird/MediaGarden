import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import localStore from './local'
import on from './on'
import search from './search'
import url from './url'
import view from './view'


const logger = createLogger({collapsed: true})

const configureMiddleware = () => {
  return applyMiddleware(
    thunk,
    localStore,
    on,
    search,
    url,
    view,
    logger
  )
}

export default configureMiddleware
export { hydrateState } from './local'
