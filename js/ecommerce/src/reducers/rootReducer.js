import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    simpleReducer,
    apiReducer
});