import React from "react"
import { connect } from 'react-redux'
import './BreedPicturesPage.css'

class BreedPicturesPage extends React.Component {

  randomize(array) {
    console.log('I am inside randomize')
    const expectedOutput = 10
    if (array.length < expectedOutput) return array
    let indexes = []
    while (indexes.length < 10) {
      const randNum = Math.floor(Math.random() * Math.floor(array.length))
      if (!indexes.indexOf(randNum) > -1) {
        indexes.push(randNum);
      }
    }
    const output = indexes.reduce((output, index) => {
      output.push(array[index])
      return output
    }, [])
    return output
  }

  renderPictures() {
    console.log('I am inside renderPictures')
      const currentBreedName = this.props.match.params.breedname
      const currentBreed = this.props.dogsList.find(breed => breed.breedname === currentBreedName)
      const breedTenPictures = this.randomize(currentBreed.pictures)
      return (
        <div className="breed-pictures-box">
          {breedTenPictures.map(breed => <img className="breed-picture" key={breed} alt="breed" src={breed} />)}
        </div>
      )
  }

  render() {
    if (this.props.dogsList) {
      return this.renderPictures()
    }
    return <div>Loading...</div>
  }
}

const mapStateToProps = (state) => {
  return {
    dogsList: state.setBreeds.dogslist
  }
}

export default connect(mapStateToProps)(BreedPicturesPage)