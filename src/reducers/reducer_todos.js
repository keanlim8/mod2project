import { SET_TODOS } from '../constants'

export default (state = [], action) => {
  switch(action.type){
    case SET_TODOS:
      const { todos } = action
      return todos
    default:
      return state
  }
}
