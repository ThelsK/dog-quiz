import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import GamePageContainer from "./GamePageContainer"
import Scorebar from "../Scorebar"

class GamePageWrapper extends React.Component {

  render() {
    return (
      <div className="game-page">
        <Scorebar />
        {this.props.breedsList.length
          ? <GamePageContainer />
          : "Loading..."
        }
        <Link to="/" className="App-link return-home">
          Return Home
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state =>
  ({ breedsList: state.breedsList })

export default connect(mapStateToProps)(GamePageWrapper)
