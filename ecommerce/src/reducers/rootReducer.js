import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import apiReducer from './apiReducer';
import itemsReducer from './itemsReducer';


export default combineReducers({
  simpleReducer,
  apiReducer,
  itemsReducer,
});
