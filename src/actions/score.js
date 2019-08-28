export const SET_SCORE = 'SET_SCORE'
export const UPDATE_SCORE = 'UPDATE_SCORE'

export const setScore = () => dispatch => {
  const action = {
    type: SET_SCORE,
    payload: {
      totalScore: 0,
      correctScore: 0
    }
  }
  dispatch(action)
}

export const updateScore = (totalScore, correctScore) => dispatch => {
  const action = {
    type: UPDATE_SCORE,
    payload: {
      totalScore,
      correctScore
    }
  }
  dispatch(action)
}