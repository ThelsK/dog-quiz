export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION'

export const generateQuestion = (breedsList = [], questionType = "picture", recentQuestions = [], totalAnswers = 3) => dispatch => {

  if (!breedsList.length) {
    console.log("ERROR: generateQuestion expects a list of breeds (each with a breedname and an array of pictures) as its first argument.")
    return
  }

  if (totalAnswers > breedsList.length) {
    totalAnswers = breedsList.length
  }

  if (questionType === "mixed") {
    if (Math.random() < 0.5) {
      questionType = "picture"
    } else {
      questionType = "breedname"
    }
  }

  console.log("Generating Questions")

  const correctIndexes = generateCorrectIndexes(breedsList, recentQuestions)
  const incorrectIndexes = generateIncorrectIndexes(breedsList, correctIndexes.breedIndex, totalAnswers)

















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

const generateCorrectIndexes = (breedsList) => {

  const breedIndex = Math.floor(Math.random() * breedsList.length)
  const picturesList = breedsList[breedIndex].pictures
  const pictureIndex = Math.floor(Math.random() * picturesList.length)

  return ({
    breedIndex,
    pictureIndex,
  })
}

const generateIncorrectIndexes = (breedsList, correctIndex, totalAnswers) => {
  const incorrectIndexes = []
  while (incorrectIndexes.length < totalAnswers - 1) {
    const randomIndex = Math.floor(Math.random() * breedsList.length)
    if (randomIndex !== correctIndex && !incorrectIndexes.includes[randomIndex]) {
      incorrectIndexes.push(randomIndex)
    }
  }
  console.log("Correct Index:", correctIndex)
  console.log("Incorrect Indexes:", incorrectIndexes)
}