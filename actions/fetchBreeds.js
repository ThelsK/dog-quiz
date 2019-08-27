import request from 'superagent'

export const SET_BREEDS = 'SET_BREEDS'

export function fetchBreeds() {
  const breedsListArray = []
  // call requestBreednames
  // in map function, call requestPictures
  // call createBreedsList (take out requestPictures)
}

// fetches list of breed names
function requestBreednames() {
  return function () {
    request('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        Object.keys(response.message)
      })
  }
}

// creates array of dog objects (calls requestPictures)
function createBreedsList = (breednames) => {
  const breedsListArray = []
  breednames.map(breedname => {
    const pictures = requestPictures(breedname)
    const breedObject = {
      breedname,
      pictures
    }
    breedsListArray.push(breedObject)
  })
  setBreedsConstructor(breedsListArray)
}

// fetches array of picture URLs
function requestPictures = (breedname) => {
  request('https://dog.ceo/api/breed/' + breedname + '/images')
    .then(response => response.message) //gets array of URLs
}

// creates action that gets sent to reducer
function setBreedsConstructor = (breedsListArray) => {
  return {
    type: SET_BREEDS,
    payload: {
      breedslist: [breedsListArray]
    }
  }
}
