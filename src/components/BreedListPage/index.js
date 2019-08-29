import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import BreedList from "./BreedList.js"
import Title from "../Title"

class BreedListContainer extends React.Component {
  render() {
    return (
      <div className="App">
        <Title title="MOTh's List of Dog Breeds" />
        {this.props.breedsList
          ? <BreedList breedsList={this.props.breedsList}></BreedList>
          : "Loading..."
        }
        <Link to="/" className="App-link return-home">
          Return Home
        </Link>
      </div >
    )
  }
}

const mapStateToProps = state =>
  ({ breedsList: state.breedsList })

export default connect(mapStateToProps)(BreedListContainer)