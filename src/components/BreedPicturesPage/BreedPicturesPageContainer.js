import React from "react"

export default class BreedPicturesPageContainer extends React.Component {

  randomize(array) {
    const expectedOutput = 10
    if (array.length < expectedOutput) return array
    let indexes = []
    while (indexes.length < 10) {
      const randNum = Math.floor(Math.random() * Math.floor(array.length))
      if (indexes.indexOf(randNum) === -1) {
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
    return this.renderPictures()
  }
}