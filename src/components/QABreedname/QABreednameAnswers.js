import React from "react"

export default class QABreednameAnswers extends React.Component {
  render() {
    return (
      <div className="answerbox">
        <h4 className="answertitle">
          {this.props.answerText}
        </h4>
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
              <img
                className="answerpicture"
                src={answer.picture}
                alt={"possible answer"}
                id={id}
              />
              <br />
              {(this.props.hotkeys.length > id)
                ? this.props.hotkeys[id]
                : null}
            </div>
          )}
        </div>
      </div>
    )
  }
}