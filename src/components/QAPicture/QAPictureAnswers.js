import React from "react"

export default class QAPictureAnswers extends React.Component {

  render() {
    return (<div>
      <h2>answers:</h2>
      {this.props.answers.map((answer, id) => <p key={id}>{answer.breedname}</p>)}
    </div>
    )
  }
}