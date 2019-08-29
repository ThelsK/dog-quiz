export const ADD_CORRECT = 'SET_CORRECT'
export const ADD_WRONG = 'SET_WRONG'
export const RESET_SCORE = 'RESET_SCORE'
export const UPDATE_STREAK = 'UPDATE_STREAK'
export const CLEAR_STREAK = 'CLEAR_STREAK'

export const addCorrect = () => dispatch => {
  const action = {
    type: ADD_CORRECT,
  }
  const action2 = {
    type: UPDATE_STREAK,
  }

  dispatch(action)
  dispatch(action2)
}

export const addWrong = () => dispatch => {
  const action = {
    type: ADD_WRONG
  }
  const action2 = {
    type: CLEAR_STREAK
  }

  dispatch(action)
  dispatch(action2)
}

export const resetScore = () => dispatch => {
  const action = {
    type: RESET_SCORE
  }
  dispatch(action)
}