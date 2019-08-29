import React from "react"
import { connect } from "react-redux"
import { generateQuestion } from "../../actions/generateQuestion.js"
import QAPictureContainer from '../QAPicture/QAPictureContainer'
import Scorebar from "../Scorebar"
import { resetActiveBreeds, addBreedsToActive } from '../../actions/setActiveBreeds'

class GamePageContainer extends React.Component {

  componentDidMount() {
    this.props.resetActiveBreeds()
    this.props.addBreedsToActive(this.props.activeBreeds, this.props.breedsList)
    this.props.generateQuestion(this.props.activeBreeds)
  }

  render() {
    return (
      <div>
        <h1>
          Game Page
        </h1>
        <Scorebar />
        <QAPictureContainer currentQuestion={this.props.currentQuestion} />
      </div>
    )
  }
}

const mapStateToProps = state =>
  ({
    breedsList: state.breedsList,
    currentQuestion: state.currentQuestion,
    activeBreeds: state.activeBreeds

  })

const mapDispatchToProps = { generateQuestion, resetActiveBreeds, addBreedsToActive }

export default connect(mapStateToProps, mapDispatchToProps)(GamePageContainer)