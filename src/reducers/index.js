import { combineReducers } from 'redux'
import breedsList from "./breedsList"
import currentQuestion from "./currentQuestion"

export default combineReducers({
  breedsList,
  currentQuestion,
})