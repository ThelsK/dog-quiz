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
      <div className="scorebar-left">
        <p className="scorebar-percent">{correctScorePercent}%</p>
        <p className="scorebar-correct">correct</p>
        <p className="scorebar-total-score">({correctScore} of {totalScore})</p>
      </div>
      <div className="scorebar-right">
        <p className="scorebar-current-streak">Current Streak: {streak}</p>
      </div>
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
