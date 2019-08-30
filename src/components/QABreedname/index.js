import React from "react"
import QABreednameQuestion from "./QABreednameQuestion";
import QABreednameAnswers from "./QABreednameAnswers";

export default class QABreednameContainer extends React.Component {
  render() {
    return <div className="qabox">
      <QABreednameQuestion
        question={this.props.currentQuestion.breedname}
      />
      <QABreednameAnswers
        answers={this.props.currentQuestion.answers}
        answerStates={this.props.answerStates}
        answerText={this.props.answerText}
        handleClickAnswer={this.props.handleClickAnswer}
        hotkeys={this.props.hotkeys}
      />
    </div>
  }
}