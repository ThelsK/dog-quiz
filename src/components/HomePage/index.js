import React from "react"
import { Link } from "react-router-dom"
import Title from "../Title"
import "./HomePage.css"
import MOThdog from "../../images/MOThdog.png"

class HomePage extends React.Component {
  componentDidMount() {
    document.title = "MOTh's Dog Quiz App"
  }

  render() {
    return (
      <div className="home-page">
        <img className="logo" src={MOThdog} alt="MOTh Logo" />
        <Title title="MOTh's Dog Quiz" />
        <div className="home-page-links-box">

          <Link to="/breeds/" className="home-page-link">
            <h3 className="link-heading">
              List of dog breeds
            </h3>
            <p className="link-description">
              Browse a list of dog breeds and check out their cute pictures.
            </p>
          </Link>

          <Link to="/game/picture" className="home-page-link">
            <h3 className="link-heading">
              Identify the dog in the picture
            </h3>
            <p className="link-description">
              Play a game where you are shown a picture and have to guess the correct name of the dog breed from three different answers.
            </p>
          </Link>

          <Link to="/game/breedname" className="home-page-link">
            <h3 className="link-heading">
              What does the dog look like
            </h3>
            <p className="link-description">
              Play a game where you are given the name of a dog breed and have to guess which of the pictures has a dog of that breed.
            </p>
          </Link>

          <Link to="/game/mixed" className="home-page-link">
            <h3 className="link-heading">
              A mixture of both games
            </h3>
            <p className="link-description">
              Play a combination of the first two games. Sometimes you have to guess which dog is on a picture, and sometimes you have to guess which picture depicts a certain breed.
            </p>
          </Link>

          <Link to="/game/match" className="home-page-link">
            <h3 className="link-heading">
              Match dog pictures
            </h3>
            <p className="link-description">
              Play a game where you are shown a picture and have to guess which of the other pictures belongs to the same breed.
            </p>
          </Link>

          <Link to="/game/hardmode" className="home-page-link">
            <h3 className="link-heading">
              Dog quiz on steroids
            </h3>
            <p className="link-description">
              Play a combination of all the other games, except that you have five answers to choose from.
            </p>
          </Link>

        </div >
      </div >
    )
  }
}

export default HomePage