import React from 'react'
import { connect } from "react-redux"
import { generateQuestion } from "../../actions/generateQuestion.js"
import { clearNewBreeds } from '../../actions/setActiveBreeds'
import "./NewBreeds.css"

class NewBreeds extends React.Component {

  componentDidMount() {
    setTimeout(this.startNextQuestion, 8000)
  }

  startNextQuestion = () => {
    this.props.generateQuestion(this.props.activeBreeds)
    this.props.clearNewBreeds()
  }

  render() {
    return (
      <div className="hints">
        {this.props.newBreeds.map((breed, id) =>
          <div key={id} className="hint">
            <img className="hintpicture" alt={breed.breedname}
              src={breed.pictures[Math.floor(Math.random() * breed.pictures.length)]}
            />
            <h2>{breed.breedname}</h2>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state =>
  ({
    activeBreeds: state.activeBreeds,
    newBreeds: state.newBreeds,
  })

const mapDispatchToProps = {
  generateQuestion,
  clearNewBreeds,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBreeds)