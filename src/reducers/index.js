import { combineReducers } from 'redux'
import data from './dataReducer'
import error from './errorReducer'
import form from './formReducer'
import loading from './loadingReducer'
import note from './noteReducer'
import view from './viewReducer'
import searchTerm from './searchTermReducer'
import searchFilter from './searchFilterReducer'
import token from './tokenReducer'


const rootReducer = combineReducers({
  data,
  error,
  form,
  loading,
  note,
  searchTerm,
  searchFilter,
  token,
  view
})

export default rootReducer
