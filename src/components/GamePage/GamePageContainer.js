import React from "react"
import { connect } from "react-redux"
import { generateQuestion } from "../../actions/generateQuestion.js"
import QAPictureContainer from '../QAPicture/QAPictureContainer'

class GamePageContainer extends React.Component {

  componentDidMount() {
    this.props.generateQuestion(this.props.breedsList)
  }

  render() {
    return (
      <div>
        <h1>
          Game Page
        </h1>
        <QAPictureContainer currentQuestion={this.props.currentQuestion} />
      </div>
    )
  }
}

const mapStateToProps = state =>
  ({
    breedsList: state.breedsList,
    currentQuestion: state.currentQuestion
  })

const mapDispatchToProps = { generateQuestion }

export default connect(mapStateToProps, mapDispatchToProps)(GamePageContainer)