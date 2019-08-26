import React from 'react'
import { Provider } from "react-redux"
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            Mirte and Olga and Thels' Dog Quiz
          </div>
        </Provider >
      </BrowserRouter>
    )
  }
}

export default App;