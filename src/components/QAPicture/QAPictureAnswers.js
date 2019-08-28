import React from "react"

export default class QAPictureAnswers extends React.Component {
  state = {
    answered: false
  }

  checkCorrect = (event) => {
    this.setState({
      answered: true
    })
    // if (this.props.answers[event.target.id].isCorrect) {
    //   console.log("correct!")
    // } else {
    //   console.log("false")
    // }
  }

  render() {
    return (
      <div>
        <h2>answers:</h2>
        <div className="answers">
          {this.props.answers.map((answer, id) =>
            <div
              className={"answer " + (!this.state.answered ? null : (answer.isCorrect ? "correct" : "wrong"))}
              key={id} id={id}
              onClick={this.checkCorrect}
            >
              {answer.breedname}
            </div>
          )}
        </div>
      </div>
    )
  }
}