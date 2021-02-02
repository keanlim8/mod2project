import { SIGNED_IN, SET_TODOS, SET_COMPLETED } from '../constants'

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

export function setCompleted(completeToDos) {
  const action = {
    type: SET_COMPLETED,
    completeToDos
  }
  return action
}
