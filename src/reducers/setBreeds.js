import { SET_BREEDS } from '../actions/fetchBreeds'

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SET_BREEDS:
      return { ...state, dogslist: action.payload }
    default:
      return state
  }
}