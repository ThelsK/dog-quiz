import { combineReducers } from 'redux'
import breedsList from "./breedsList"
import currentQuestion from "./currentQuestion"
import score from "./score"

export default combineReducers({
  breedsList,
  currentQuestion,
  score,
})