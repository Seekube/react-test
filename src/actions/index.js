import axios from 'axios'

export const fetchJedi = () => {
  return (dispatch) => {
    axios.get('http://localhost:3001/jedi')
      .then((res) => {
        dispatch({
          type: 'FETCH_FINISH',
          payload: res.data,
        })
      })
  }
}

export const addJedi = (jedi) => {
  return (dispatch) => {
    axios.post('http://localhost:3001/jedi', jedi)
      .then((res) => {
        dispatch({
          type: 'ADD_FINISH',
          payload: res.data
        })
      })
  }
}