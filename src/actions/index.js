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