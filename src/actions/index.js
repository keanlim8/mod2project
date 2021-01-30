import { SIGNED_IN, SET_TODOS } from '../constants'

export function logUser(email){
  const action = {
    type: SIGNED_IN,
    email
  }
  return action
}

export function setTodos(todos){
  const action = {
    type: SET_TODOS,
    todos
  }
  return action
}
