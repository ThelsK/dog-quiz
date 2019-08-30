import React from "react"
import { connect } from "react-redux"
import BreedList from "./BreedList.js"
import Title from "../Title"

class BreedListContainer extends React.Component {
  componentDidMount() {
    document.title = "List of Dog Breeds"
  }

  render() {
    return (
      <div className="breed-list-page">
        <Title title="MOTh's List of Dog Breeds" />
        {this.props.breedsList
          ? <BreedList breedsList={this.props.breedsList}></BreedList>
          : "Loading..."
        }
        <br></br>
      </div >

    )
  }
}

const mapStateToProps = state =>
  ({ breedsList: state.breedsList })

export default connect(mapStateToProps)(BreedListContainer)