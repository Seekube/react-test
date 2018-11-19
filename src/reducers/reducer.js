/**
 * Created by thomashourlier on 2/26/17.
 */

import { combineReducers } from 'redux';

import jediReducer from './jedi.js';


export default combineReducers({
  jedi: jediReducer,
});
