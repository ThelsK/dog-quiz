import React from "react"
import QAPictureQuestion from "./QAPictureQuestion";
import QAPictureAnswers from "./QAPictureAnswers";
import "./QA.css"

export default class QAPictureContainer extends React.Component {
  render() {
    return <div className="q-a-box">
      <QAPictureQuestion
        question={this.props.currentQuestion.picture}
      />
      <QAPictureAnswers
        answers={this.props.currentQuestion.answers}
        answerStates={this.props.answerStates}
        receivedAnswer={this.props.receivedAnswer}
      />
    </div>
  }
}