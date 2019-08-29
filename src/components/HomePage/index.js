import React from "react"
import { Link } from "react-router-dom"
import Title from "../Title"
import "./HomePage.css"

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Title title="MOTh's Dog Quiz" />
        <div className="home-page-links-box">
          <div className="home-page-link">
            <Link to="/breeds/" className="App-link link-heading">
              List of dog breeds
        </Link>
            <p className="link-description">Check the list of the breeds and their pictures</p>
          </div>

          <div className="home-page-link">
            <Link to="/game/picture" className="App-link link-heading">
              Identify the dog in the picture
        </Link>
            <p className="link-description">Play a game where you are given a single picture and have to guess the correct name of the dog breed from three different answers.</p>
          </div>

          <div className="home-page-link">
            <Link to="/game/breedname" className="App-link link-heading">
              What does the dog look like
        </Link>
            <p className="link-description">Play a game where you are given the name of a dog breed and have to guess which picture portrays a dog of that particular breed.</p>
          </div>

          <div className="home-page-link">
            <Link to="/game/mixed" className="App-link link-heading">
              A mixture of both the other two games
        </Link>
            <p className="link-description">Play a game where both of the above are mixed and matched. Sometimes you have to guess the name with the picture, and sometimes you have to guess the picture with the name.</p>
          </div>
        </div>

      </div>
    )
  }
}

export default HomePage