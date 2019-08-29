import { combineReducers } from 'redux'
import breedsList from "./breedsList"
import currentQuestion from "./currentQuestion"
import score from "./score"
import activeBreeds from "./activeBreeds"
import newBreeds from "./newBreeds"

export default combineReducers({
  breedsList,
  currentQuestion,
  score,
  activeBreeds,
  newBreeds
})