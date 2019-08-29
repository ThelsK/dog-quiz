import React from "react"
import { connect } from "react-redux"
import { generateQuestion } from "../../actions/generateQuestion.js"
import { clearActiveBreeds, addBreedsToActive, clearNewBreeds } from '../../actions/setActiveBreeds'
import { addCorrect, addWrong, resetScore } from "../../actions/score.js"
import QAPictureContainer from '../QAPicture'
import NewBreeds from '../NewBreeds'

class GamePageContainer extends React.Component {
  state = {
    answerStates: []
  }

  componentDidMount() {
    this.props.resetScore()
    this.props.clearActiveBreeds()
    this.props.addBreedsToActive(this.props.activeBreeds, this.props.breedsList)
    document.onkeydown = this.handleKeyDown
  }

  componentWillUnmount() {
    this.props.clearNewBreeds()
    document.onkeydown = null
  }

  handleKeyDown = event => {
    switch (event.key) {
      case "1":
        this.handleAnswer(0)
        break
      case "2":
        this.handleAnswer(1)
        break
      case "3":
        this.handleAnswer(2)
        break
      default:
    }
  }

  receivedAnswer = event =>
    this.handleAnswer(parseInt(event.target.id))

  handleAnswer = answerClicked => {
    if (this.props.newBreeds.length || this.state.answerStates.length) {
      return
    }
    this.setAnswerStates(this.props.currentQuestion.answers, answerClicked)

    if (this.props.currentQuestion.answers[answerClicked].isCorrect) {
      this.props.addCorrect()
      setTimeout(this.startNextQuestion, 800)
    } else {
      this.props.addWrong()
      setTimeout(this.startNextQuestion, 2000)
    }
  }

  startNextQuestion = () => {
    this.setState({ answerStates: [] })
    if (!this.props.streak || this.props.streak % 5) {
      this.props.generateQuestion(this.props.activeBreeds)
    } else {
      this.props.addBreedsToActive(this.props.activeBreeds, this.props.breedsList)
    }
  }

  setAnswerStates = (answers, answerClicked) =>
    this.setState({
      answerStates: answers.map((answer, answerID) => {
        let answerClass = ""

        if (answerClicked === answerID) {
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
      })
    })

  render() {
    if (this.props.newBreeds.length) {
      return <NewBreeds newBreeds={this.props.newBreeds} />
    }
    switch (this.props.currentQuestion.type) {
      case "picture":
        return (<QAPictureContainer
          currentQuestion={this.props.currentQuestion}
          answerStates={this.state.answerStates}
          receivedAnswer={this.receivedAnswer}
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