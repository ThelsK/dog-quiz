import React from "react"
import QAPictureQuestion from "../QAPicture/QAPictureQuestion";
import QABreednameAnswers from "../QABreedname/QABreednameAnswers";

export default class QAPictureContainer extends React.Component {
  render() {
    return <div className="qabox">
      <QAPictureQuestion
        question={this.props.currentQuestion.picture2}
      />
      <QABreednameAnswers
        answers={this.props.currentQuestion.answers}
        answerStates={this.props.answerStates}
        answerText={this.props.answerStates.length
          ? `${this.props.answerText} (${this.props.currentQuestion.breedname})`
          : this.props.answerText}
        handleClickAnswer={this.props.handleClickAnswer}
        hotkeys={this.props.hotkeys}
      />
    </div>
  }
}