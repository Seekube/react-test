const jedi = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FINISH':
      return [
        ...action.payload,
        ...state
      ]
    case 'ADD_FINISH':
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name
        }
      ]
    default:
      return state
  }
}

export default jedi