import { SET_COMPLETED } from '../constants'
// eslint-disable-next-line
export default (state = [], action) => {
  switch(action.type){
    case SET_COMPLETED:
      const { completeToDos } = action
      return completeToDos
    default:
      return state
  }
}
