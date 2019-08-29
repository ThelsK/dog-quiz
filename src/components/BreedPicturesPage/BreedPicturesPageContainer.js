import React from "react"
import Title from "../Title"

export default class BreedPicturesPageContainer extends React.Component {

  randomize(array) {
    const expectedOutput = 10
    if (array.length < expectedOutput) return array
    let indexes = []
    while (indexes.length < 10) {
      const randNum = Math.floor(Math.random() * Math.floor(array.length))
      if (indexes.indexOf(randNum) === -1) indexes.push(randNum)
    }
    const output = indexes.reduce((output, index) => {
      output.push(array[index])
      return output
    }, [])
    return output
  }

  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  renderPictures() {
      const currentBreedName = this.props.breedName
      const currentBreedObject = this.props.breedsList.find(breed => breed.breedname === currentBreedName)
      const breedTenPictures = this.randomize(currentBreedObject.pictures)
      return (
        <div className="breed-pictures-box">
          {breedTenPictures.map(breed => <img className="breed-picture" key={breed} alt="breed" src={breed} />)}
        </div>
      )
  }

  render() {
    return (<div className="breed-pictures-page">
      <Title title={this.capitalize(this.props.breedName)} />
      {this.renderPictures()}
      </div>)
  }
}