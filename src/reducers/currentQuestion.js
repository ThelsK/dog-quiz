import { SET_CURRENT_QUESTION } from '../actions/generateQuestion'

export default (state = [], action = {}) => {
  console.log("We are calling the reducer inside currentQuestion.")
  switch (action.type) {
    case SET_CURRENT_QUESTION:
      console.log("We are calling the reducer inside currentQuestion with SET_CURRENT_QUESTION.")
      return action.payload
    default:
      console.log("We are calling the reducer inside currentQuestion and resolve to default.")
      return state
  }
}