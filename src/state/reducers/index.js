// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

import { combineReducers } from 'redux';

import { childReducer } from './childReducer';
import { parentReducer } from './parentReducer';

export default combineReducers({
  childReducer,
  parentReducer,
});
