// import { ITEMS } from '../data/items';
import api from '../data/api.json';

export const getItems = () => dispatch => dispatch(setItemsList(api));

export const deleteItems = () => dispatch => dispatch({
  type: 'DELETE_ITEMS',
  index: 0,
});

export const setItemsList = payload => ({
  type: 'GET_ITEMS',
  payload,
});

export const getFilterItems = payload => ({
  type: 'GET_FILTER_ITEMS',
  payload,
});
