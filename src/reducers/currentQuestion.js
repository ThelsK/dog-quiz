import { SET_CURRENT_QUESTION } from '../actions/generateQuestion'

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_CURRENT_QUESTION:
      return action.payload
    default:
      return state
  }
}