/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from 'axios';

export function fetchJedi() {
  return (dispatch) => {
    axios.get('http://localhost:3001/jedi')
      .then((res) => {
        dispatch({
          type: 'FETCH_FINISH',
          payload: res.data,
        });
      })
  }
}

export function addJedi(name) {
  return (dispatch) => {
    axios.post('http://localhost:3001/jedi', { name })
      .then((res) => {
        dispatch({
          type: 'ADD_FINISH',
          payload: res.data,
        });
      })
  }
}
