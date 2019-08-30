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
              Go to the list of the breeds and check out their cute pictures.
            </p>
          </Link>

          <Link to="/game/picture" className="home-page-link">
            <h3 className="link-heading">
              Identify the dog in the picture
            </h3>
            <p className="link-description">
              Play a game where you are given a single picture and have to guess the correct name of the dog breed from three different answers.
            </p>
          </Link>

          <Link to="/game/breedname" className="home-page-link">
            <h3 className="link-heading">
              What does the dog look like
            </h3>
            <p className="link-description">
              Play a game where you are given the name of a dog breed and have to guess which picture portrays a dog of that particular breed.
            </p>
          </Link>

          <Link to="/game/mixed" className="home-page-link">
            <h3 className="link-heading">
              A mixture of both games
            </h3>
            <p className="link-description">
              Play a game where both of the above are mixed and matched. Sometimes you have to guess the name with the picture, and sometimes you have to guess the picture with the name.
            </p>
          </Link>

        </div >
      </div >
    )
  }
}

export default HomePage