import React from "react"
import QAPictureQuestion from "./QAPictureQuestion";
import QAPictureAnswers from "./QAPictureAnswers";


export default class QAPictureContainer extends React.Component {

  render() {
    return <div>
      {this.props.currentQuestion.type
        ? <div><QAPictureQuestion question={this.props.currentQuestion.picture} />
          <QAPictureAnswers answers={this.props.currentQuestion.answers} /></div>
        : "Loading quiz.."}
    </div>
  }
}


