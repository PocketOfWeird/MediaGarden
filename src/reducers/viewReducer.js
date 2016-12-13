import { SET_CURRENT_VIEW, GO_BACKWARD, GO_FORWARD } from '../actions'


const defaultState = {
  past: [],
  current: ['search'],
  future: []
}

const view = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_VIEW:
      return {
        ...state,
        past: [...state.past, state.current],
        current: action.payload
      }
    case GO_BACKWARD:
      return {
        ...state,
        future: [...state.future, state.current],
        current: state.past[state.past.length - 1],
        past: [...state.past.slice(0, state.past.length - 1)]
      }
    case GO_FORWARD:
      return {
        ...state,
        past: [...state.past, state.current],
        current: state.future[state.future.length - 1],
        future: [state.future.slice(0, state.future.length - 1)]
      }
    default:
      return state
  }
}

export default view
