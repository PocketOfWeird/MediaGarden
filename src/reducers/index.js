import { combineReducers } from 'redux'
import user from './userReducer'
import data from './dataReducer'
import error from './errorReducer'
import form from './formReducer'
import loading from './loadingReducer'
import note from './noteReducer'
import view from './viewReducer'
import searchTerm from './searchTermReducer'
import searchFilter from './searchFilterReducer'


const rootReducer = combineReducers({
  data,
  error,
  form,
  loading,
  note,
  searchTerm,
  searchFilter,
  user,
  view
})

export default rootReducer
