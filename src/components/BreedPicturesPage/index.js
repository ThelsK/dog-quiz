import React from "react"
import { connect } from 'react-redux'
import './BreedPicturesPage.css'
import BreedPicturesPageContainer from './BreedPicturesPageContainer'

class BreedPicturesPage extends React.Component {

  render() {
    if (this.props.breedsList && this.props.breedsList.length) {
      return <BreedPicturesPageContainer breedsList={this.props.breedsList} breedName={this.props.match.params.breedname} />
    }
    return <div>Loading...</div>
  }
}

const mapStateToProps = (state) => {
  return {
    breedsList: state.breedsList
  }
}

export default connect(mapStateToProps)(BreedPicturesPage)