const initialValue = {
  items: [
    {
      src:
      '../../images/sheet/IMG_20190416_162945_412.jpg',
      altText: 'Valor por defecto',
      caption: 'Default',
    },
  ],
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        items: action.payload,
      };
    case 'DELETE_ITEMS':
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.index),
          ...state.items.slice(action.index + 1),
        ],
      };
    default:
      return state;
  }
};
