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
    this.props.generateQuestion(this.props.activeBreeds)
  }

  receivedAnswer = event => {
    const answerClicked = parseInt(event.target.id)
    this.setAnswerStates(this.props.currentQuestion.answers, answerClicked)

    if (this.props.currentQuestion.answers[answerClicked].isCorrect) {
      this.props.addCorrect()
    } else {
      this.props.addWrong()
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
      console.log("about to create NewBreeds component")
      return <NewBreeds />
    }
    switch (this.props.currentQuestion.type) {
      case "picture":
        return <QAPictureContainer currentQuestion={this.props.currentQuestion} answerStates={this.state.answerStates} receivedAnswer={this.receivedAnswer} />
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