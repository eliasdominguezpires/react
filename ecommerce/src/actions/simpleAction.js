// eslint-disable-next-line import/prefer-default-export
export const simpleAction = () => (dispatch) => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'valores nuevos',
  });
};
