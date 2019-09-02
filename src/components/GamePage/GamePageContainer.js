import React from "react"
import { connect } from "react-redux"
import { generateQuestion } from "../../actions/generateQuestion.js"
import { clearActiveBreeds, addBreedsToActive, clearNewBreeds } from '../../actions/setActiveBreeds'
import { addCorrect, addWrong, resetScore } from "../../actions/score.js"
import QAPictureContainer from '../QAPicture'
import QABreednameContainer from '../QABreedname'
import QAMixedContainer from '../QAMixed'
import NewBreeds from '../NewBreeds'

const hotkeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="]

class GamePageContainer extends React.Component {
  state = {
    answerStates: [],
    answerText: "Choose your answer:"
  }

  componentDidMount() {
    this.props.resetScore()
    this.props.clearActiveBreeds()
    this.props.addBreedsToActive(this.props.activeBreeds, this.props.breedsList, this.props.totalAnswers)
    document.onkeydown = this.handleKeyDown
  }

  componentWillUnmount() {
    this.props.clearNewBreeds()
    document.onkeydown = null
  }

  handleKeyDown = event => {
    if (this.props.currentQuestion.answers) {
      for (let index = 0; index < this.props.currentQuestion.answers.length; index++) {
        if (index < hotkeys.length && hotkeys[index] === event.key) {
          this.handleAnswer(index)
        }
      }
    }
  }

  handleClickAnswer = event => {
    this.handleAnswer(parseInt(event.target.id))
  }

  handleAnswer = answerChosen => {
    if (this.props.newBreeds.length || this.state.answerStates.length) {
      return
    }
    this.setAnswerStates(this.props.currentQuestion.answers, answerChosen)
    if (this.props.currentQuestion.answers[answerChosen].isCorrect) {
      this.props.addCorrect()
      setTimeout(this.startNextQuestion, 800)
    } else {
      this.props.addWrong()
      setTimeout(this.startNextQuestion, 2000)
    }
  }

  startNextQuestion = () => {
    this.setState({ answerStates: [], answerText: "Choose your answer:" })
    if (!this.props.streak || this.props.streak % 5) {
      this.props.generateQuestion(this.props.activeBreeds, this.props.gameType, [], this.props.totalAnswers)
    } else {
      this.props.addBreedsToActive(this.props.activeBreeds, this.props.breedsList, this.props.totalAnswers)
    }
  }

  setAnswerStates = (answers, answerChosen) =>
    this.setState({
      answerStates: answers.map((answer, answerID) => {
        let answerClass = ""

        if (answerChosen === answerID) {
          answerClass += "Choose"
        } else {
          answerClass += "Show"
        }

        if (answer.isCorrect) {
          answerClass += "Correct"
        } else {
          answerClass += "Wrong"
        }

        return answerClass
      }),
      answerText: (answers[answerChosen].isCorrect)
        ? "Well done!"
        : "Too bad!"
    })

  render() {
    if (this.props.newBreeds.length) {
      return <NewBreeds
        newBreeds={this.props.newBreeds}
        gameType={this.props.gameType}
        totalAnswers={this.props.totalAnswers}
      />
    }
    switch (this.props.currentQuestion.type) {
      case "picture":
        return (<QAPictureContainer
          currentQuestion={this.props.currentQuestion}
          answerStates={this.state.answerStates}
          answerText={this.state.answerText}
          handleClickAnswer={this.handleClickAnswer}
          hotkeys={hotkeys}
        />)
      case "breedname":
        return (<QABreednameContainer
          currentQuestion={this.props.currentQuestion}
          answerStates={this.state.answerStates}
          answerText={this.state.answerText}
          handleClickAnswer={this.handleClickAnswer}
          hotkeys={hotkeys}
        />)
      case "match":
        return (<QAMixedContainer
          currentQuestion={this.props.currentQuestion}
          answerStates={this.state.answerStates}
          answerText={this.state.answerText}
          handleClickAnswer={this.handleClickAnswer}
          hotkeys={hotkeys}
        />)
      default:
        return "Loading Quiz..."
    }
  }
}

const mapStateToProps = state =>
  ({
    breedsList: state.breedsList,
    currentQuestion: state.currentQuestion,
    activeBreeds: state.activeBreeds,
    newBreeds: state.newBreeds,
    streak: state.streak,
  })

const mapDispatchToProps = {
  generateQuestion,
  addCorrect,
  addWrong,
  resetScore,
  clearActiveBreeds,
  addBreedsToActive,
  clearNewBreeds,
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePageContainer)