import React from "react"
import { connect } from "react-redux"
import { generateQuestion } from "../../actions/generateQuestion.js"

class GamePageContainer extends React.Component {

  componentDidMount() {
    this.props.generateQuestion(this.props.breedsList)
  }

  render() {
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