import { SET_SCORE, UPDATE_SCORE} from '../actions/score'

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_SCORE:
      console.log('I am inside set_score')
      return action.payload
    case UPDATE_SCORE:
      return action.payload
    default:
      return state
  }
}