import React from "react"

export default class QAPictureQuestion extends React.Component {
  render() {
    return (
      <div className="questionbox">
        <h5 className="questiontitle">Identify the dog in the picture</h5>
        <img
          className="question"
          src={this.props.question}
          alt={"Identify this dog"}
        />
      </div>
    )
  }
}