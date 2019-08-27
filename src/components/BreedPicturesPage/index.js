import React from "react"
import { connect } from 'react-redux'
import './BreedPicturesPage.css'

class BreedPicturesPage extends React.Component {
  render() {
    // const currentBreed = this.props.dogList.find(breed => breed.name === this.props.name)
    if (this.props.dogsList) {

      return (
        <div className="breed-pictures-box">
          { this.props.dogsList[0].pictures.map(dog => {
            return <img className="breed-picture" key={dog} alt="breed" src={dog} />
          })}
          
          
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dogsList: state.setBreeds.dogslist
  }
}

export default connect(mapStateToProps)(BreedPicturesPage)