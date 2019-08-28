import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import BreedList from "./BreedList.js"

class BreedListContainer extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>MOTh's List of Dog Breeds</h1>
        {this.props.breedsList
          ? <BreedList breedsList={this.props.breedsList}></BreedList>
          : "Loading..."
        }
        <Link to="/" className="App-link">
          Return Home
        </Link>
      </div >
    )
  }
}

const mapStateToProps = state =>
  ({ breedsList: state.breedsList })

export default connect(mapStateToProps)(BreedListContainer)

