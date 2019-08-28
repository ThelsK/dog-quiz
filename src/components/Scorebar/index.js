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
    const correctScorePercent = (correctScore * 100) / totalScore || 0
    const wrongScorePercent = totalScore - correctScore
    return (<div className="scorebar">
      <p>Total Score: {correctScore}/{totalScore}</p><br />
      <p className="scorebar-correct">{correctScorePercent}%</p>/<p className="scorebar-wrong">{wrongScorePercent}%</p>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score
  }
}

export default connect(mapStateToProps, { resetScore })(Scorebar)
