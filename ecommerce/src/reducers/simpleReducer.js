const initValue = {
  result: 'valor inicial'
};

export default (state = initValue, action) => {
  console.log(action);
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};
