import React from "react"
import { Link } from "react-router-dom"

export default function BreedList(props) {
  return (
    <div>
      <ul>
        {props.breedList.map((breed, id) =>
          <li key={id}>
            <Link to={`/breeds/${breed.breedname}`} className="App-link">
              {breed.breedname}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}