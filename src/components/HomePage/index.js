import React from "react"
import { Link } from "react-router-dom"

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>MOTh's Dog Quiz</h1>
        <Link to="/breeds/" className="App-link">
          List of Dog Breeds
        </Link>
      </div>
    )
  }
}

export default HomePage