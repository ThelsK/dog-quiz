import React from "react"
import { Link } from "react-router-dom"

export default function BreedList(props) {
  return (
    <div>
      <ul>
        {props.breedList.map((breed, id) =>
          <li key={id}>
            <Link to={`/breed/${breed.breedname}`}>
              {breed.breedname}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}