import React from "react"
import { Link } from "react-router-dom"
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
    const breednames = this.props.breedsList.map(breed => breed.breedname)
    const index = breednames.indexOf(this.props.breedName)

    let previousDog = ""
    if (index === 0) {
      previousDog = breednames[breednames.length - 1]
    } else {
      previousDog = breednames[index - 1]
    }

    let nextDog = ""
    if (index === breednames.length - 1) {
      nextDog = breednames[0]
    } else {
      nextDog = breednames[index + 1]
    }

    return (
      <div className="breed-pictures-page">
        <Title title={this.props.breedName} />
        {this.renderPictures()}
        <div className="breed-pictures-nav">
          <Link to={`/breeds/${previousDog}`} className="return-home">
            {`<< ${previousDog}`}
          </Link>
          <Link to="/breeds/" className="return-home">
            Return to List
          </Link>
          <Link to={`/breeds/${nextDog}`} className="return-home">
            {`${nextDog} >>`}
          </Link>
        </div>
      </div>
    )
  }
}