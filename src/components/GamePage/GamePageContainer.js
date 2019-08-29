import React from "react"
import { connect } from "react-redux"
import { generateQuestion } from "../../actions/generateQuestion.js"
import { addCorrect, addWrong, resetScore } from "../../actions/score.js"
import QAPictureContainer from '../QAPicture'

class GamePageContainer extends React.Component {
  state = {
    answerStates: []
  }

  componentDidMount() {
    console.log("GamePageContainer Did Mount")
    this.props.resetScore()

    // Reset Score

    // Reset Active Breeds

    // Add Active Breeds (Parameters: BreedsList, ???Amount???)

    // Generate Question

    this.props.generateQuestion(this.props.breedsList)
  }

  receivedAnswer = event => {
    const answerClicked = parseInt(event.target.id)
    console.log("GamePageContainer Received Answer:", answerClicked)
    this.setAnswerStates(this.props.currentQuestion.answers, answerClicked)

    if (this.props.currentQuestion.answers[answerClicked].isCorrect) {
      this.props.addCorrect()
    } else {
      this.props.addWrong()
    }
  }

  setAnswerStates = (answers, answerClicked) => {
    console.log("AnswerClicked:", answerClicked)
    this.setState({
      answerStates: answers.map((answer, answerID) => {
        let answerClass = ""
        console.log("answerID:", answerID)
        console.log("Match:", (answerClicked === answerID))

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
  }

  render() {
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
    currentQuestion: state.currentQuestion
  })

const mapDispatchToProps = {
  generateQuestion,
  addCorrect,
  addWrong,
  resetScore,
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePageContainer)