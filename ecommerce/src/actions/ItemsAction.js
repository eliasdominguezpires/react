import { ITEMS } from '../data/items';

export const getItems = () => dispatch => dispatch(setItemsList(ITEMS));

export const deleteItems = () => dispatch => dispatch({
  type: 'DELETE_ITEMS',
  index: 0,
});

export const setItemsList = payload => ({
  type: 'GET_ITEMS',
  payload,
});
