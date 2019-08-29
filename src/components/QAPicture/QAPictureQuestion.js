import React from "react"

export default class QAPictureQuestion extends React.Component {
  render() {
    return (
      <div>
        <h2>Identify the dog in the picture</h2>
        <img className="question" src={this.props.question} alt={"guess what dog this is"} />
      </div>
    )
  }
}