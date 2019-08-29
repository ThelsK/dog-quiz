import React from "react"

export default class QAPictureQuestion extends React.Component {
  render() {
    return (<div>
      <img className="question" src={this.props.question} alt={"guess what dog this is"} />
    </div>
    )
  }
}