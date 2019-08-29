import React from "react"
import { Link } from "react-router-dom"

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>MOTh's Dog Quiz</h1>
        <Link to="/breeds/" className="App-link">
          List of dog breeds
        </Link>
        <br />
        <br />
        <br />
        <Link to="/game/picture" className="App-link">
          Identify the dog in the picture
        </Link>
        <p>Play a game where you are given a single picture and have to guess the correct name of the dog breed from three different answers.</p>
        <br />
        <Link to="/game/breedname" className="App-link">
          What does the dog look like
        </Link>
        <p>Play a game where you are given the name of a dog breed and have to guess which picture portrays a dog of that particular breed.</p>
        <br />
        <Link to="/game/mixed" className="App-link">
          A mixture of both the other two games
        </Link>
        <p>Play a game where both of the above are mixed and matched. Sometimes you have to guess the name with the picture, and sometimes you have to guess the picture with the name.</p>
      </div>
    )
  }
}

export default HomePage