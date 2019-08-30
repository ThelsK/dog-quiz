import React from "react"

export default class QABreednameAnswers extends React.Component {
  render() {
    return (
      <div className="a-box">
        <h2>Answers:</h2>
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
                ? this.props.hotkeys[id]
                : null}
              <img
                className="answerPicture"
                src={answer.picture}
                alt={"possible answer"}
                id={id}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}