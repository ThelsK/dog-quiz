import { ADD_CORRECT, ADD_WRONG, RESET_SCORE } from '../actions/score'

export default (state = { totalScore: 0, correctScore: 0 }, action = {}) => {
  switch (action.type) {
    case RESET_SCORE:
      return {
        ...state,
        totalScore: 0,
        correctScore: 0
      }
    case ADD_CORRECT:
      return {
        ...state,
        totalScore: state.totalScore + 1,
        correctScore: state.correctScore + 1
      }
    case ADD_WRONG:
      return {
        ...state,
        totalScore: state.totalScore + 1
      }
    default:
      return state
  }
}