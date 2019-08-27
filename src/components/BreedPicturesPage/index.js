import React from "react"
import { connect } from 'react-redux'

class BreedPicturesPage extends React.Component {
  render() {
    // const currentBreed = this.props.dogList.find(breed => breed.name === this.props.name)
    const currentBreed = this.props.dogList[0]
    return (
      <div className="breed-pictures-box">
        { this.props.images !== null && <img className="breed-picture" key={currentBreed.name} alt="breed" src={currentBreed.pictures}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dogList: state.dogList
  }
}

export default connect(mapStateToProps)(BreedPicturesPage)