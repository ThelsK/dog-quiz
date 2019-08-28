export const ADD_CORRECT = 'SET_CORRECT'
export const ADD_WRONG = 'SET_WRONG'
export const RESET_SCORE = 'RESET_SCORE'

export const addCorrect = () => dispatch => {
  const action = {
    type: ADD_CORRECT
  }
  dispatch(action)
}

export const addWrong = () => dispatch => {
  const action = {
    type: ADD_WRONG
  }
  dispatch(action)
}

export const resetScore = () => dispatch => {
  const action = {
    type: RESET_SCORE
  }
  dispatch(action)
}