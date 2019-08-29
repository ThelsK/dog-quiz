import { SET_NEW_BREEDS, CLEAR_NEW_BREEDS } from '../actions/setActiveBreeds'

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_NEW_BREEDS:
      return action.payload
    case CLEAR_NEW_BREEDS:
      return []
    default:
      return state
  }
}