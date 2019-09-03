import React from "react"

export default class QAPictureQuestion extends React.Component {
  render() {
    return (
      <div className="questionbox">
        <h5 className="questiontitle">
          {this.props.questionText}
        </h5>
        <img
          className="photo question"
          src={this.props.question}
          alt={"Identify this dog"}
        />
      </div>
    )
  }
}