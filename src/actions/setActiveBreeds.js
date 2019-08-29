export const RESET_ACTIVE_BREEDS = 'RESET_ACTIVE_BREEDS'
export const ADD_BREEDS_TO_ACTIVE = 'ADD_BREEDS_TO_ACTIVE'
export const SET_NEW_BREEDS = 'SET_NEW_BREED'

export const resetActiveBreeds = () => (dispatch) => {
  const action = {
    type: RESET_ACTIVE_BREEDS,
  }
  dispatch(action)
}

export const addBreedsToActive = (activeBreeds, breedsList) => (dispatch) => {
  const newBreeds = []
  while (newBreeds.length < 3) {
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