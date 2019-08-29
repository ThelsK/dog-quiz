import React from "react"

export default class QAPictureAnswers extends React.Component {

  render() {
    return (
      <div>
        <h2>Answers:</h2>
        <div className="answers">
          {this.props.answers.map((answer, id) =>
            <div
              className={(this.props.answerStates.length > id)
                ? "answer answer".concat(this.props.answerStates[id])
                : "answer answerWaiting"}
              key={id}
              id={id}
              onClick={this.props.receivedAnswer}
            >
              {answer.breedname}
            </div>
          )}
        </div>
      </div>
    )
  }
}