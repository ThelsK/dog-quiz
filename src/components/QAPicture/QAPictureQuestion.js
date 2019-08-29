import React from "react"

export default class QAPictureQuestion extends React.Component {
  render() {
    return (
      <div className="q-box">
        <h5>Identify the dog in the picture</h5>
        <img className="question" src={this.props.question} alt={"guess what dog this is"} />
      </div>
    )
  }
}