export const CLEAR_ACTIVE_BREEDS = 'CLEAR_ACTIVE_BREEDS'
export const ADD_BREEDS_TO_ACTIVE = 'ADD_BREEDS_TO_ACTIVE'
export const SET_NEW_BREEDS = 'SET_NEW_BREED'
export const CLEAR_NEW_BREEDS = 'CLEAR_NEW_BREEDS'

export const clearActiveBreeds = () => (dispatch) => {
  const action = {
    type: CLEAR_ACTIVE_BREEDS,
  }
  dispatch(action)
}

export const addBreedsToActive = (activeBreeds, breedsList, totalAnswers = 3) => (dispatch) => {

  if (totalAnswers > breedsList.length - activeBreeds.length) {
    totalAnswers = breedsList.length - activeBreeds.length
  }

  const newBreeds = []

  while (newBreeds.length < totalAnswers) {
    const newBreed = breedsList[Math.floor(Math.random() * breedsList.length)]
    if (!activeBreeds.includes(newBreed) && !newBreeds.includes(newBreed)) {
      newBreeds.push(newBreed)
    }
  }

  const actionAddToActive = {
    type: ADD_BREEDS_TO_ACTIVE,
    payload: newBreeds
  }

  const actionSetNewBreeds = {
    type: SET_NEW_BREEDS,
    payload: newBreeds
  }

  dispatch(actionAddToActive)
  dispatch(actionSetNewBreeds)
}

export const clearNewBreeds = () => (dispatch) => {
  const action = {
    type: CLEAR_NEW_BREEDS
  }
  dispatch(action)
}