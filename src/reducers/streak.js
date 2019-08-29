import { UPDATE_STREAK, CLEAR_STREAK } from '../actions/score'

export default (state = 0, action = {}) => {
  switch (action.type) {
    case UPDATE_STREAK:
      return state + 1
    case CLEAR_STREAK:
      return 0
    default:
      return state
  }
}