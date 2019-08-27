import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./components/HomePage/"
import BreedListPage from "./components/BreedListPage/"
import BreedPicturesPage from "./components/BreedPicturesPage/"
import GamePage from "./components/GamePage/"
import { connect } from "react-redux";
import { fetchBreeds } from './actions/fetchBreeds'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchBreeds()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/breeds/" component={BreedListPage} />
          <Route path="/breeds/:breedname" component={BreedPicturesPage} />
          <Route path="/game/:gametype" component={GamePage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, { fetchBreeds })(App) 