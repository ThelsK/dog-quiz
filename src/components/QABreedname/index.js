import React from "react"
import QABreednameQuestion from "./QABreednameQuestion";
import QABreednameAnswers from "./QABreednameAnswers";
//import "./QABreedname.css"

export default class QABreednameContainer extends React.Component {
  render() {
    return <div className="q-a-box">
      <QABreednameQuestion
        question={this.props.currentQuestion.breedname}
      />
      <QABreednameAnswers
        answers={this.props.currentQuestion.answers}
        answerStates={this.props.answerStates}
        handleClickAnswer={this.props.handleClickAnswer}
        hotkeys={this.props.hotkeys}
      />
    </div>
  }
}