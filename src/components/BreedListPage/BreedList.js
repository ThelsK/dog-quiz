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
              {breed.breedname.slice(0, 1).toUpperCase()}{breed.breedname.slice(1)}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}