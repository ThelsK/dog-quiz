import React from "react"

export default class QABreednameQuestion extends React.Component {
  render() {
    return (
      <div className="questionbox">
        <h3 className="questiontitle">
          What does the dog look like?
        </h3>
        <h3>{this.props.question}</h3>
      </div>
    )
  }
}