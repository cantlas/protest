import { GET_BY_TITLE, GET_BY_LOCATION, RECEIVE_PROTESTS }

const reducer = (state, action) => {
  switch (action.type) {
    case GET_BY_TITLE:
      return Object.assign({}, state, {isFetching: true, isFetchingByTitle: true})
    case GET_BY_LOCATION:
      return Object.assign({}, state, {isFetching: true, isFetchingByLocation: true})
    case RECEIVE_PROTESTS:
      return Object.assign({}, state, {
        isFetching: false,
        isFetchingByTitle: false,
        isFetchingByLocation: false,
        protests: action.protests
      })
    default:
      return state
  }
}

export default reducer
