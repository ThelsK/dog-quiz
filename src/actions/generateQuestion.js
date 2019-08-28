export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION'

export const generateQuestion = (breedsList = []) => dispatch => {
  console.log("We are generating a question.")
  const action = ({
    type: SET_CURRENT_QUESTION,
    payload: {
      type: "picture",
      picture: breedsList[0].pictures[0],
      answers: [
        {
          breedname: breedsList[0].breedname,
          isCorrect: true,
        },
        {
          breedname: breedsList[1].breedname,
          isCorrect: false,
        },
        {
          breedname: breedsList[2].breedname,
          isCorrect: false,
        },
      ],
    },
  })
  dispatch(action)
}