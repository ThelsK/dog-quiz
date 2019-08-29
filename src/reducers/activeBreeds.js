import { RESET_ACTIVE_BREEDS, ADD_BREEDS_TO_ACTIVE } from '../actions/setActiveBreeds'

export default (state = [], action = {}) => {
  switch (action.type) {
    case RESET_ACTIVE_BREEDS:
      return []
    case ADD_BREEDS_TO_ACTIVE:
      return [...state, ...action.payload]
    default:
      return state
  }
}