import React from "react"
import { connect } from 'react-redux'
import './BreedPicturesPage.css'

class BreedPicturesPage extends React.Component {

  render() {
    if (this.props.dogsList) {
      const currentBreedName = this.props.match.params.breedname
      const currentBreed = this.props.dogsList.find(breed => breed.breedname === currentBreedName)
      return (
        <div className="breed-pictures-box">
          {currentBreed.pictures.map(breed => <img className="breed-picture" key={breed} alt="breed" src={breed} />)}
        </div>
      )
    } else {
      return <p>Loading...</p>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dogsList: state.setBreeds.dogslist
  }
}

export default connect(mapStateToProps)(BreedPicturesPage)