import React from "react"
import { connect } from "react-redux"
import { generateQuestion } from "../../actions/generateQuestion.js"
import QAPictureContainer from '../QAPicture/QAPictureContainer'
import Scorebar from "../Scorebar"
import Title from '../Title'

class GamePageContainer extends React.Component {

  componentDidMount() {
    this.props.generateQuestion(this.props.breedsList)
  }

  render() {
    return (
      <div>
        <Title title="Game Page"/>
        <Scorebar />
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