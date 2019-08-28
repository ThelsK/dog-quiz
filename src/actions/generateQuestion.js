export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION'

export const generateQuestion = (breedsList = [], questionType = "picture", recentQuestions = [], totalAnswers = 3) => dispatch => {

  if (!breedsList.length) {
    console.log("ERROR: generateQuestion() expects a list of breeds (each with a breedname and an array of pictures) as its first argument.")
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

  const recentPictures = recentQuestions.map(question => question.picture)
  const correctIndexes = generateCorrectIndexes(breedsList, recentPictures)
  const incorrectIndexes = generateIncorrectIndexes(breedsList, correctIndexes.breedIndex, totalAnswers)

  const question = {}
  question.type = questionType
  question.breedname = breedsList[correctIndexes.breedIndex].breedname
  question.picture = breedsList[correctIndexes.breedIndex].pictures[correctIndexes.pictureIndex]

  const answers = []
  if (questionType === "picture") {
    answers.push({ breedname: question.breedname, isCorrect: true })
    answers.push(...(incorrectIndexes.map(index =>
      ({ breedname: breedsList[index].breedname, isCorrect: false }))))
  } else {
    answers.push({ picture: question.picture, isCorrect: true })
    answers.push(...(incorrectIndexes.map(index =>
      ({ picture: getRandomPicture(breedsList[index]), isCorrect: false }))))
  }

  question.answers = shuffleArray(answers)
  const action = ({
    type: SET_CURRENT_QUESTION,
    payload: question,
  })
  dispatch(action)
}

const generateCorrectIndexes = (breedsList, recentPictures) => {

  let breedIndex = 0
  let pictureIndex = 0
  let picture = ""

  do {
    breedIndex = Math.floor(Math.random() * breedsList.length)
    pictureIndex = Math.floor(Math.random() * breedsList[breedIndex].pictures.length)
    picture = breedsList[breedIndex].pictures[pictureIndex]
  } while (recentPictures.includes(picture))

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
  return incorrectIndexes
}

const getRandomPicture = breed => {
  const pictureIndex = Math.floor(Math.random() * breed.pictures.length)
  return breed.pictures[pictureIndex]
}

const shuffleArray = inputArray => {
  inputArray = [...inputArray]
  const outputArray = []
  while (inputArray.length) {
    const index = Math.floor(Math.random() * inputArray.length)
    outputArray.push(inputArray[index])
    inputArray[index] = inputArray[inputArray.length - 1]
    inputArray.pop()
  }
  return outputArray
}