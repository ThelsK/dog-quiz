import React from "react"
import { Link } from "react-router-dom"
import './BreedListPage.css'

export default function BreedList(props) {
  return (
    <div>
      <ul>
        {props.breedsList.map((breed, id) =>
          <li key={id}>
            <Link to={`/breeds/${breed.breedname}`} className="App-link">
              {breed.breedname}
            </Link>
          </li>
        )}
      </ul>
      <Link to="/" className="return-home">
          Return Home
        </Link>
    </div>
  )
}