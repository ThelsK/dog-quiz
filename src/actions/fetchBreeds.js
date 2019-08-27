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