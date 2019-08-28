import React from "react"
import { connect } from "react-redux"
import { generateQuestion } from "../../actions/generateQuestion.js"

class GamePageContainer extends React.Component {

  componentDidMount() {
    console.log("The Game Page Container did mount.")
    console.log("PROPS:", this.props)
    this.props.generateQuestion(this.props.breedsList)
    console.log("The Game Page Container is done mounting.")
  }

  render() {
    console.log("We are rendering the Game Page Container.")
    return (
      <div>
        GamePage
      </div>
    )
  }
}

const mapStateToProps = state =>
  ({ breedsList: state.breedsList })

const mapDispatchToProps = { generateQuestion }

export default connect(mapStateToProps, mapDispatchToProps)(GamePageContainer)