import React from 'react'
import { connect } from 'react-redux'
import { setScore, updateScore } from '../../actions/score'

class Scorebar extends React.Component {

  componentDidMount() {
    this.props.setScore()
  }

  render() {
    const totalScore = this.props.score.totalScore
    const correctScore = this.props.score.correctScore
    return (<div className="scorebar">
      <p>Your score: {correctScore}/{totalScore}</p>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score
  }
}

export default connect(mapStateToProps, { setScore, updateScore })(Scorebar)