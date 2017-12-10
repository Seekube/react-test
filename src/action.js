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

export function registerJedi(name, id){
  return (dispatch) => {
    axios.post('http://localhost:3001/jedi', {id : id, name : name})
      .then((res) => {
        console.log(res);
        dispatch({
          type : 'REGISTER_JEDI',
          data : res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
