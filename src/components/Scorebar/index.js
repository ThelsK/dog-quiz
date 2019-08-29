import React from 'react'
import { connect } from 'react-redux'
import { resetScore } from '../../actions/score'
import './Scorebar.css'

class Scorebar extends React.Component {

  componentDidMount() {
    this.props.resetScore()
  }

  render() {
    const totalScore = this.props.score.totalScore
    const correctScore = this.props.score.correctScore
    const correctScorePercent = Math.round((correctScore * 100) / totalScore) || 0
    const streak = this.props.streak
    return (<div className="scorebar">
      <p>Total Score: {correctScore}/{totalScore}</p>
      <p className="scorebar-correct">{correctScorePercent}%</p>
      <p>Current Streak: {streak}</p>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
    streak: state.streak,
  }
}

export default connect(mapStateToProps, { resetScore })(Scorebar)
