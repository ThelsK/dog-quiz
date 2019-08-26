import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Route } from "react-router-dom"
import store from "./store"
import "./App.css"
import FetchData from "./components/FetchData/"
import HomePage from "./components/HomePage/"
import BreedListPage from "./components/BreedListPage/"
import BreedPicturesPage from "./components/BreedPicturesPage/"
import GamePage from "./components/GamePage/"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            Mirte and Olga and Thels' Dog Quiz
            <FetchData />
            <Route exact path="/" component={HomePage} />
            <Route path="/breeds/" component={BreedListPage} />
            <Route path="/breed/:breedname" component={BreedPicturesPage} />
            <Route path="/game/" component={GamePage} />
          </div>
        </Provider >
      </BrowserRouter>
    )
  }
}

export default App