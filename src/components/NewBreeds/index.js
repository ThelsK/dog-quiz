import React from 'react'
import { connect } from "react-redux"
import { generateQuestion } from "../../actions/generateQuestion.js"
import { clearNewBreeds } from '../../actions/setActiveBreeds'
import "./NewBreeds.css"

class NewBreeds extends React.Component {

  startNextQuestion = () => {
    this.props.generateQuestion(this.props.activeBreeds, this.props.gameType, [], this.props.totalAnswers)
    this.props.clearNewBreeds()
  }

  render() {
    const starting = this.props.activeBreeds.length === this.props.newBreeds.length
    return (
      <div className="hintbox">
        <h3>
          {starting ? "Let's get started!" : "You leveled up!"}
        </h3>
        <p>
          {starting ? "Memorize these breeds and start your game:" : "You got five in a row! Let's add some more breeds:"}
        </p>
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
        <button className="start-button" type="button" onClick={this.startNextQuestion}>{starting ? "Start" : "Continue"}</button>
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