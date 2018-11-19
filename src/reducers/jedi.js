function jediReducer(state = [], action) {
    switch (action.type) {
      case 'FETCH_FINISH':
        return [
          ...action.payload,
          ...state,
        ];
      case 'ADD_FINISH':
      /*
      updates the state to display the new jedi in the list
      */
        return [
            ...state,
            {...state[-1],id:action.payload.id, name:action.payload.name}
        ];
      default:
        return state;
    }
  }

export default jediReducer