import fetch from 'isomorphic-fetch'

export const GET_BY_TITLE = 'GET_BY_TITLE'
export const GET_BY_LOCATION = 'GET_BY_LOCATION'
export const RECEIVE_PROTESTS = 'RECEIVE_PROTESTS'

export function getByTitle(query) {
  return {
    type: GET_BY_TITLE,
    query: query
  }
}

export function getByLocation(query) {
  return {
    type: GET_BY_LOCATION,
    query: query
  }
}

export function receiveProtests(json) {
  return {
    type: RECEIVE_PROTESTS,
    protestsL json.data.children.map(child => child.data),
  }
}
