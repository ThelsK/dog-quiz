import React from "react"
import { connect } from "react-redux"
import GamePageContainer from "./GamePageContainer"

class GamePageWrapper extends React.Component {

  render() {
    return (
      <div>
        {this.props.breedsList.length
          ? <GamePageContainer />
          : "Loading..."
        }
      </div>
    )
  }
}

const mapStateToProps = state =>
  ({ breedsList: state.breedsList })

export default connect(mapStateToProps)(GamePageWrapper)
