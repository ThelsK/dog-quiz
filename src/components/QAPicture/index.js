import React from "react"
import QAPictureQuestion from "./QAPictureQuestion";
import QAPictureAnswers from "./QAPictureAnswers";

export default class QAPictureContainer extends React.Component {
  render() {
    return <div className="qabox">
      <QAPictureQuestion
        question={this.props.currentQuestion.picture}
        questionText="Identify the dog in the picture:"
      />
      <QAPictureAnswers
        answers={this.props.currentQuestion.answers}
        answerStates={this.props.answerStates}
        answerText={this.props.answerText}
        handleClickAnswer={this.props.handleClickAnswer}
        hotkeys={this.props.hotkeys}
      />
    </div>
  }
}