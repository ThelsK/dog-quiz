import React from "react"

export default class QAPictureQuestion extends React.Component {
  render() {
    return (
      <img src={this.props.question} alt={"guess this picture"} />
    )
  }
}