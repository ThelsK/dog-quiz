import React from 'react'
import { connect } from "react-redux"
import { generateQuestion } from "../../actions/generateQuestion.js"
import { clearNewBreeds } from '../../actions/setActiveBreeds'

class NewBreeds extends React.Component {
  componentDidMount() {
    this.props.generateQuestion(this.props.activeBreeds)
    this.props.clearNewBreeds()
  }
  render() {
    return "hi"
  }
}

const mapStateToProps = state =>
  ({
    activeBreeds: state.activeBreeds,
    newBreeds: state.newBreeds,
  })

const mapDispatchToProps = {
  generateQuestion,
  clearNewBreeds,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBreeds)