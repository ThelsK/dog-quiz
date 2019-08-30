import React from "react"

export default class QABreednameQuestion extends React.Component {
  render() {
    return (
      <div className="q-box">
        <h5>What does the dog look like</h5>
        <h6>{this.props.question}</h6>
      </div>
    )
  }
}