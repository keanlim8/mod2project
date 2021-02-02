import { combineReducers } from 'redux'
import user from './reducer_user'
import todos from './reducer_todos'
import completeToDos from './reducer_completed_todos'

export default combineReducers({
  user,
  todos,
  completeToDos
})
