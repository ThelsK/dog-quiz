import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./components/HomePage/"
import BreedListPage from "./components/BreedListPage/"
import BreedPicturesPage from "./components/BreedPicturesPage/"
import GamePage from "./components/GamePage/"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          Mirte and Olga and Thels' Dog Quiz
          <Route exact path="/" component={HomePage} />
          <Route path="/breeds/" component={BreedListPage} />
          <Route path="/breed/:breedname" component={BreedPicturesPage} />
          <Route path="/game/" component={GamePage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App