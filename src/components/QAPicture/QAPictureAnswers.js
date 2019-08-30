import React from "react"

export default class QAPictureAnswers extends React.Component {
  render() {
    return (
      <div className="answerbox">
        <h2 className="answertitle">
          Answers:
        </h2>
        <div className="answers">
          {this.props.answers.map((answer, id) =>
            <div
              className={(this.props.answerStates.length > id)
                ? "answer answer".concat(this.props.answerStates[id])
                : "answer answerWaiting"}
              key={id}
              id={id}
              onClick={this.props.handleClickAnswer}
            >
              {(this.props.hotkeys.length > id)
                ? `${this.props.hotkeys[id]} : ${answer.breedname}`
                : answer.breedname}
            </div>
          )}
        </div>
      </div>
    )
  }
}