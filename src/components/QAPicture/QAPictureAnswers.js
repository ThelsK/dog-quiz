import React from "react"

export default class QAPictureAnswers extends React.Component {

  render() {
    return (<div>
      <h2>answers:</h2>
      {this.props.answers.map(answer => <p>{answer.breedname}</p>)}
    </div>
    )
  }
}