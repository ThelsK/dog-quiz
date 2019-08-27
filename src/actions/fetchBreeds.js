import request from 'superagent'

export const SET_BREEDS = 'SET_BREEDS'

export const fetchBreeds = () => dispatch =>
  request('https://dog.ceo/api/breeds/list/all')
    .then(result => {
      const breedData = result.body.message
      const breednames = Object.keys(breedData)
      const filteredBreednames = breednames.reduce((result, breedname) => {
        if (!breedData[breedname].length) {
          return result.concat([breedname])
        }
        return result
      }, [])

      Promise.all(filteredBreednames.map(breedname =>
        request('https://dog.ceo/api/breed/' + breedname + '/images')
          .then(response => ({ breedname, pictures: response.body.message }))
      ))
        .then(dogsList => {
          const action = ({ type: SET_BREEDS, payload: dogsList })
          dispatch(action)
        })
    })


// export const fetchBreeds = () => dispatch =>
//   request('https://dog.ceo/api/breeds/list/all')
//     .then(response =>
//       dispatch(filterBreeds(response.body.message))
//     )

// const filterBreeds = (dogs) => {
//   const dogsList = Object.keys(dogs).reduce((dogsList, dog) => {
//     if (!dogs[dog].length) { return dogsList.concat([dog]) }
//     return dogsList
//   }, [])

//   Promise.all(dogsList.map(breedname => fetchPictures(breedname)))
//     .then(dogsList => {
//       const action = ({ type: SET_BREEDS, payload: dogsList })
//       dispatch(action)
//     })
// }

// const fetchPictures = breedname =>
//   request('https://dog.ceo/api/breed/' + breedname + '/images')
//     .then(response => ({ breedname, pictures: response.body.message }))